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
			</div>

			<div className={styles.copy}>
				<h1>Hi, I’m Alyssa.</h1>
				<p className='subtle'>Frontend engineer passionate about building accessible, intuitive user experiences. Proud soldier in United States Army Reserve (25B).
					
				</p>

				<div className={styles.ctaRow}>
					<a className={styles.cta} href='/projects'>View Projects</a>
					<a className={styles.link} href='mailto:alyssa95wendt@gmail.com'>Email me</a>
				</div>

				<ul className={styles.socials} aria-label='Social links'>
					<li><a href='https://github.com/AlyssaWendt' aria-label='GitHub'>GitHub</a></li>
					<li><a href='https://www.linkedin.com/in/alyssa-wendt/' aria-label='LinkedIn'>LinkedIn</a></li>
					<li><a href='/Resume-Portfolio.pdf' aria-label='Resume' target='_blank' rel='noopener noreferrer'>Resume</a></li>
				</ul>
			</div>
		</section>
	)
}
