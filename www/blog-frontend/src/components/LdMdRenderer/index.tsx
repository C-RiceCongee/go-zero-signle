'use client'
interface LdMdRendererProps {
	content: string
}
import content from './defaultContent'
import markdownit from 'markdown-it'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItContainer from 'markdown-it-container'
import hljs from 'highlight.js/lib/core'
import MarkdownIt from 'markdown-it'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
const LdMdRenderer: React.FC<LdMdRendererProps> = props => {
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
	const result = md.render(content)
	return <div dangerouslySetInnerHTML={{ __html: result }}></div>
}

export default LdMdRenderer
