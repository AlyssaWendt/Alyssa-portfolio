import type { Metadata } from 'next'
import './globals.scss'
import Nav from '@/components/Nav'
import ThemeToggle from '@/components/ThemeToggle'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
	title: 'Alyssa Wendt – Software Engineer',
	description: 'Clean, accessible interfaces. Army Reserve (25B).'
}

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		 <html lang='en' suppressHydrationWarning className={`${inter.className}`}>
			<body>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									var theme = localStorage.getItem('theme');
									var dark = theme !== 'light';
									document.documentElement.classList.toggle('dark', dark);
									document.documentElement.classList.toggle('light', !dark);
								} catch (e) {}
							})();
						`
					}}
				/>
				<a className='focusable' href='#main'>Skip to content</a>
				<Nav />
				<main id='main' className='container'>{children}</main>
				<ThemeToggle />
			</body>
		</html>
	)
}
