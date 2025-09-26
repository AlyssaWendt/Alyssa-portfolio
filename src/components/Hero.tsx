import Image from 'next/image'
import styles from '@/styles/components/hero.module.scss'

export default function Hero() {
	return (
		<section className={styles.hero} aria-label='Intro'>
			<div className={styles.avatarWrap}>
				<span className={styles.pulse} aria-hidden />
				<Image
					src='/images/avatar-hero.png'
					alt='Alyssa Wendt'
					width={220}
					height={220}
					className={styles.avatar}
					priority
				/>
				<span className={styles.status} title='Available for work' />
			</div>

			<div className={styles.copy}>
				<h1>Hi, I’m Alyssa.</h1>
				<p className='subtle'>
					Frontend engineer crafting clear, accessible interfaces. Former GM (AEM/TS).
					Army Reserve (25B).
				</p>

				<div className={styles.ctaRow}>
					<a className={styles.cta} href='/work'>View work</a>
					<a className={styles.link} href='mailto:alyssa95wendt@gmail.com'>Email me</a>
				</div>

				<ul className={styles.socials} aria-label='Social links'>
					<li><a href='https://github.com/AlyssaWendt' aria-label='GitHub'>GitHub</a></li>
					<li><a href='https://www.linkedin.com/in/alyssa-wendt/' aria-label='LinkedIn'>LinkedIn</a></li>
					<li><a href='/Alyssa-Wendt-Resume.pdf' aria-label='Resume'>Resume</a></li>
				</ul>
			</div>
		</section>
	)
}
