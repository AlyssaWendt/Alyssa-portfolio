'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/styles/components/nav.module.scss'

export default function Nav() {
	const path = usePathname()
	const is = (href: string) => path === href

	return (
		<header className={styles.header}>
			<nav className={styles.nav} aria-label='Primary'>
				<Link aria-current={is('/') ? 'page' : undefined} href='/'>Home</Link>
				<Link aria-current={is('/projects') ? 'page' : undefined} href='/projects'>Projects</Link>
				<Link aria-current={is('/about') ? 'page' : undefined} href='/about'>About</Link>
			</nav>
		</header>
	)
}
