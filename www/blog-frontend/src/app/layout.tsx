import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LdMenu from '../components/LdMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '村望老弟',
	description: '多读书多看报 少吃零食多睡觉！',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-skin-bg text-skin-content  scroll-m-0   m-auto`}
			>
				<div className='menu sticky top-0 z-10'>
					<LdMenu></LdMenu>
				</div>
				<div className='m-auto p-10 lg:w-1/2 md:w-full '>{children}</div>
			</body>
		</html>
	)
}
