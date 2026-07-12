import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Supabase Client (환경변수가 없으면 null 반환 - 로컬 개발 편의)
let client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  if (client) return client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    return null
  }

  client = createClient(url, anonKey, {
    auth: { persistSession: false }
  })
  return client
}

// 결과 저장 (통계용) - 실패해도 앱은 계속 동작
export async function saveResult(payload: {
  result_code: string
  locale: string
  level: number
}): Promise<void> {
  const supabase = getSupabase()
  if (!supabase) return

  try {
    await supabase.from('test_results').insert({
      result_type: payload.result_code,
      language: payload.locale,
      level: payload.level,
    })
  } catch (e) {
    // 조용히 실패 - 사용자 경험을 방해하지 않음
    console.warn('Supabase save failed', e)
  }
}

// 전체 통계에서 특정 유형의 비율 조회
export async function getTypeStats(code: string): Promise<number | null> {
  const supabase = getSupabase()
  if (!supabase) return null

  try {
    const [countRes, totalRes] = await Promise.all([
      supabase.from('test_results').select('*', { count: 'exact', head: true }).eq('result_type', code),
      supabase.from('test_results').select('*', { count: 'exact', head: true })
    ])
    const total = totalRes.count || 0
    const count = countRes.count || 0
    if (total < 100) return null // 통계가 부족하면 null
    return Math.round((count / total) * 100 * 10) / 10
  } catch (e) {
    return null
  }
}
