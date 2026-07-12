/**
 * /ads.txt — Google AdSense publisher verification file.
 *
 * REQUIRED by Google AdSense after approval:
 *   https://support.google.com/adsense/answer/7532444
 *
 * Once you receive your publisher ID (pub-XXXXXXXXXXXXXXXX) from AdSense,
 * set the env var `NEXT_PUBLIC_ADSENSE_CLIENT_ID` to `ca-pub-XXXXXXXXXXXXXXXX`
 * on your host (Vercel → Project Settings → Environment Variables) and redeploy.
 *
 * The client ID format is `ca-pub-<digits>`; the ads.txt file requires only
 * the `pub-<digits>` portion, so we strip the `ca-` prefix here.
 */

export const dynamic = 'force-static'

export function GET() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? ''
  // Accept both `ca-pub-XXX` (AdSense client ID) and bare `pub-XXX`.
  const pubId = raw.replace(/^ca-/, '').trim()

  const lines: string[] = []

  if (pubId && /^pub-\d+$/.test(pubId)) {
    // Standard Google AdSense ads.txt entry.
    // Format: <domain>, <publisher account ID>, <account type>, <certification authority ID>
    lines.push(`google.com, ${pubId}, DIRECT, f08c47fec0942fa0`)
  } else {
    // Before AdSense approval: return a valid but explicit placeholder so crawlers
    // don't 404, and so it's obvious the site is pre-approval.
    lines.push('# ads.txt is empty until Google AdSense approval is granted.')
    lines.push(
      '# After approval, set NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX on the host and redeploy.'
    )
  }

  return new Response(lines.join('\n') + '\n', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Ads.txt should be revalidated frequently by Google's crawler.
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}
