import Link from 'next/link'
import { projects } from '@/data/projects'
import styles from '@/styles/components/home-work.module.scss'

export default function WorkPage() {
	return (
		<section className='section'>
			<h1>Work</h1>
			<div className={styles.grid}>
				{projects.map(p => (
					<Link key={p.slug} href={`/work/${p.slug}`} className='card focusable'>
						<h3 style={{ marginTop: 0 }}>{p.title}</h3>
						<p className='subtle'>{p.blurb}</p>
						<p>{p.tech.join(' · ')}</p>
					</Link>
				))}
			</div>
		</section>
	)
}
