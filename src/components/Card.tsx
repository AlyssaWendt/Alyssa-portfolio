import Image from 'next/image'
import styles from '@/styles/components/projects.module.scss'
import { projects } from '@/data/projects'

export default function Card() {
       return (
	       <div className={styles.grid}>
		       {projects.map((p, i) => (
			       <div key={p.title} className={styles.card}>
				       {p.cover && (
					       <Image
						       src={p.cover}
						       alt={`${p.title} cover image`}
						       width={380}
						       height={160}
						       className={styles.cover}
						       sizes='(max-width: 640px) 100vw, 380px'
						       priority={i === 0}
					       />
				       )}
				       <h3>{p.title}</h3>
				       <div className={styles.cardDetails}>
					       <p className={styles.blurb}>{p.blurb}</p>
					       <p className='subtle'>{p.tech.join(' · ')}</p>
							<div className={styles['cta-group']}>	
								<a href={p.repo} target='_blank' rel='noopener noreferrer'>
										<button className={styles.cta}>Code</button>
								</a>
								<a href={p.demo} target='_blank' rel='noopener noreferrer'>
									<button className={styles.cta}>Project</button>
								</a>
						   </div>
				       </div>
			       </div>
		       ))}
	       </div>
       )
}
