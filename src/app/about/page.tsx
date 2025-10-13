import styles from '@/styles/components/about.module.scss';

export default function AboutPage() {
	return (
		<section className='section'>
			<h1>About Me!</h1>
			<div className={styles.aboutGrid}>
				{/* Top right image */}
				<img src="/images/about-avatar.png" alt="Alyssa Wendt professional photo" className={styles.leftImageContainer} aria-hidden />

				{/* Professional container, higher */}
				<div className={styles.aboutContainer + ' ' + styles.professional}>
					<h2>My Work</h2>
					<p>
						Frontend engineer with 3 years of experience who just loves building cool websites. I enjoy turning ideas into interactive, user-friendly experiences and making the web more fun for everyone.
					</p>
					<ul>
						<li>General Motors - Software Engineer for Global Digital Platforms</li>
						<li>United States Army Reserve - IT Specialist (25B)</li>
						<li>Little Caesars Enterprises - Help Desk Representative </li>
					</ul>
				</div>

				{/* Personal container, lower */}
				<div className={styles.aboutContainer + ' ' + styles.personal}>
					<h2>Outside of Work</h2>
					<p>
						When I'm not coding, you'll usually find me at home—curled up with a good book, catching up on my favorite shows, or hanging out with my family and my dog, Bodhi. I love the simple joys of downtime and making the most of cozy nights in.
					</p>
				</div>

				{/* Bottom left image */}
				<img src="/images/bodhi-avatar.png" alt="Bodhi personal photo" className={styles.rightImageContainer} aria-hidden />
			</div>
		</section>
	)
}
