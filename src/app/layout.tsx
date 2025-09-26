import type { Metadata } from 'next'
import './globals.scss'
import Nav from '@/components/Nav'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
	title: 'Alyssa Wendt – Frontend Engineer',
	description: 'Clean, accessible interfaces. Army Reserve (25B).'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<a className='focusable' href='#main'>Skip to content</a>
				<Nav />
				<main id='main' className='container'>{children}</main>
				<ThemeToggle />
			</body>
			</html>
	)
}
