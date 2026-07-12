import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    if (message.length < 20) {
      return NextResponse.json({ error: 'Message too short' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }
    // Basic spam filter
    const spamKeywords = ['viagra', 'casino', 'crypto pump', 'bitcoin giveaway']
    const messageLower = message.toLowerCase()
    if (spamKeywords.some(kw => messageLower.includes(kw))) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
    }

    // Store in Supabase (contact_messages table) — silent fail acceptable
    const supabase = getSupabase()
    if (supabase) {
      try {
        await supabase.from('contact_messages').insert({
          name: String(name).slice(0, 100),
          email: String(email).slice(0, 200),
          subject: String(subject).slice(0, 50),
          message: String(message).slice(0, 5000),
          user_agent: req.headers.get('user-agent')?.slice(0, 300) || null,
          created_at: new Date().toISOString()
        })
      } catch (e) {
        console.warn('Contact save to Supabase failed', e)
        // Don't fail the response — accept the message anyway
      }
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Contact API error', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
