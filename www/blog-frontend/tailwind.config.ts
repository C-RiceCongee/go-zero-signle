import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			// 自定义样式
			boxShadow: {
				'ld-shadow-1':
					'rgba(var(--color-content), 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
				'ld-shadow-2':
					'rgba(var(--color-content), 0.4) 0px 0px 0px 2px, rgba(var(--color-content), 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;',
			},
			colors: {
				skin: {
					// 全局背景色
					bg: 'rgb(var(--color-bg))',

					// 全局内容颜色
					content: 'rgb(var(--color-content))',
					content1st: 'rgb(var(--color-1st-content))',
					content2sec: 'rgb(var(--color-2sec-content))',

					// 菜单背景色
					'menu-bg': 'rgba(var(--color-menu-bg))',

					// 菜单内容
					'menu-content': 'rgba(var(--color-menu-content))',
				},
			},
		},
	},
	plugins: [],
}
export default config
