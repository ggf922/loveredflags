// Lightweight markdown-to-HTML renderer (no external deps)
// Supports: headings (h1-h4), bold, italic, links, lists, paragraphs, blockquotes, code

export function renderMarkdown(markdown: string): string {
  let html = markdown.trim()

  // Escape HTML entities in code blocks first
  html = html.replace(/```([\s\S]*?)```/g, (_m, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    return `<pre class="bg-white/5 border border-white/10 rounded-lg p-4 my-4 overflow-x-auto"><code class="text-neon-cyan text-sm">${escaped}</code></pre>`
  })

  // Inline code
  html = html.replace(/`([^`\n]+)`/g, '<code class="bg-white/10 px-1.5 py-0.5 rounded text-neon-pink text-sm">$1</code>')

  // Headings
  html = html.replace(/^#### (.+)$/gm, '<h4 class="text-lg font-bold text-white mt-6 mb-3">$1</h4>')
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gradient mt-10 mb-5">$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-gradient mt-12 mb-6">$1</h1>')

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-neon-pink pl-4 py-2 my-4 italic text-white/70">$1</blockquote>')

  // Bold + Italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em class="text-white/90">$1</em>')

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-neon-pink hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')

  // Unordered lists
  html = html.replace(/^(- .+(?:\n- .+)*)/gm, (match) => {
    const items = match.split('\n').map(line => {
      const content = line.replace(/^- /, '')
      return `<li class="ml-6 mb-2 list-disc text-white/80">${content}</li>`
    }).join('')
    return `<ul class="my-4">${items}</ul>`
  })

  // Ordered lists
  html = html.replace(/^(\d+\. .+(?:\n\d+\. .+)*)/gm, (match) => {
    const items = match.split('\n').map(line => {
      const content = line.replace(/^\d+\. /, '')
      return `<li class="ml-6 mb-2 list-decimal text-white/80">${content}</li>`
    }).join('')
    return `<ol class="my-4">${items}</ol>`
  })

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-white/10" />')

  // Paragraphs — wrap remaining text lines
  html = html
    .split(/\n\n+/)
    .map(block => {
      const trimmed = block.trim()
      if (!trimmed) return ''
      // Skip already-wrapped HTML
      if (/^<(h[1-6]|ul|ol|blockquote|pre|hr|div)/.test(trimmed)) return trimmed
      return `<p class="text-white/80 leading-relaxed mb-4">${trimmed.replace(/\n/g, '<br />')}</p>`
    })
    .join('\n')

  return html
}
