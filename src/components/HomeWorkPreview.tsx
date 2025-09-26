import Link from 'next/link'
import styles from '@/styles/components/home-work.module.scss'
import { projects } from '@/data/projects'

export default function HomeWorkPreview() {
	const featured = projects.slice(0, 3)
	return (
		<div className={styles.grid}>
			{featured.map(p => (
				<Link key={p.slug} href={`/work/${p.slug}`} className='card focusable'>
					<h3 style={{ marginTop: 0 }}>{p.title}</h3>
					<p className='subtle'>{p.blurb}</p>
					<p>{p.tech.join(' · ')}</p>
				</Link>
			))}
		</div>
	)
}
