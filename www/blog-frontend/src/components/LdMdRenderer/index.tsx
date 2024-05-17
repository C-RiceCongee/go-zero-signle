'use client'
interface LdMdRendererProps {
	content: string
}
import markdownit from 'markdown-it'
import markdownItDeflist from 'markdown-it-deflist'
import { markdownItTable } from 'markdown-it-table'
import markdownItContainer from 'markdown-it-container'
import hljs from 'highlight.js/lib/core'
import MarkdownIt from 'markdown-it'
import javascript from 'highlight.js/lib/languages/javascript'
import go from 'highlight.js/lib/languages/go'
import shell from 'highlight.js/lib/languages/shell'
import diff from 'highlight.js/lib/languages/diff.js'
import typescript from 'highlight.js/lib/languages/typescript'

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
	const result = md.render(content)
	return <div dangerouslySetInnerHTML={{ __html: result }}></div>
}

export default LdMdRenderer
