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
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('go', go)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('sh', shell)
hljs.registerLanguage('diff', diff)
hljs.registerLanguage('typescript', typescript)
const LdRenderToc = (html: string) => {
	const domRef = useRef<HTMLDivElement>(null)
	useLayoutEffect(() => {
		domRef.current?.addEventListener('click', e => {
			e.preventDefault()
			if (e.target as HTMLAnchorElement) {
				const id = e.target!.getAttribute('href').substring(1)
				document.getElementById(id)!.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'nearest',
				})
			}
		})
	}, [])
	return (
		<div className='fixed bg-skin-bg right-0 p-10 text-sm top-[68px] shadow-ld-shadow-1  backdrop-blur-xl radius-sm'>
			<div ref={domRef} dangerouslySetInnerHTML={{ __html: html }}></div>
		</div>
	)
}
const LdMdRenderer: React.FC<LdMdRendererProps> = props => {
	const { content } = props
	const [htmlToc, setHtmlToc] = useState('')
	const [renderContent, setRenderContent] = useState('')

	const handleRender = useCallback(() => {
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
					'<pre><code class="hljs">' +
					md.utils.escapeHtml(str) +
					'</code></pre>'
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
				format: (x, htmlencode) => {
					console.log(x)
					console.log(htmlencode)
					return `<span>${htmlencode(x)}</span>`
				},
			})
			.use(markdownItTocDoneRight, {
				callback: html => {
					setHtmlToc(html)
				},
			})
		setRenderContent(md.render(content))
	}, [content])
	useEffect(() => {
		handleRender()
	}, [handleRender])
	return (
		<div>
			{LdRenderToc(htmlToc)}
			<div
				className='ldMdRenderer scroll-smooth'
				dangerouslySetInnerHTML={{ __html: renderContent }}
			></div>
		</div>
	)
}

export default LdMdRenderer
