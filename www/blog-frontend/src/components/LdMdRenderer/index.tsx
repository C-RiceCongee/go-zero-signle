'use client'
interface LdMdRendererProps {
	content: string
}
import markdownit from 'markdown-it'
import markdownItDeflist from 'markdown-it-deflist'
import { markdownItTable } from 'markdown-it-table'
import markdownItContainer from 'markdown-it-container'
import footnot from 'markdown-it-footnote'
import { full as emoji } from 'markdown-it-emoji'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItTocDoneRight from 'markdown-it-toc-done-right'
// import lazy_loading from 'markdown-it-image-lazy-loading'
import hljs from 'highlight.js/lib/core'
import MarkdownIt from 'markdown-it'
import javascript from 'highlight.js/lib/languages/javascript'
import go from 'highlight.js/lib/languages/go'
import shell from 'highlight.js/lib/languages/shell'
import diff from 'highlight.js/lib/languages/diff.js'
import typescript from 'highlight.js/lib/languages/typescript'
import '../../styles/render/render.css'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('go', go)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('sh', shell)
hljs.registerLanguage('diff', diff)
hljs.registerLanguage('typescript', typescript)
const LdMdRenderer: React.FC<LdMdRendererProps> = props => {
	const { content } = props
	const md: MarkdownIt = markdownit({
		html: true,
		linkify: true,
		typographer: true,
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return (
						'<pre><code class="hljs">' +
						hljs.highlight(str, { language: lang, ignoreIllegals: true })
							.value +
						'</code></pre>'
					)
				} catch (__) {}
			}

			return (
				'<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>'
			)
		},
	})
		.use(markdownItDeflist)
		.use(markdownItContainer)
		.use(markdownItTable)
		.use(footnot)
		.use(emoji)
		.use(markdownItAnchor, {
			permalink: true,
			permalinkBefore: true,
			permalinkSymbol: '#',
		})
		.use(markdownItTocDoneRight)
	const result = md.render(content)
	md.render(`![](example.png "image title")`)
	return (
		<div
			className='ldMdRenderer'
			dangerouslySetInnerHTML={{ __html: result }}
		></div>
	)
}

export default LdMdRenderer
