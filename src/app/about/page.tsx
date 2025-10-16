import styles from '@/styles/components/about.module.scss';
import { workHistory, funFacts, skills } from '@/data/about';

export default function AboutPage() {
	return (
		<section className="section container">

			{/* Work History */}
			<section aria-label="Work history" className={styles.workSection}>
				<h2 className={styles.sectionTitle}>Work History</h2>
				<div className={styles.workGrid}>
					{workHistory.map((job) => (
						<div key={job.company} className={styles.workCard}>
							<img src={job.logo} alt={job.company + ' logo'} className={styles.workLogo} />
							<h3 className={styles.workCompany}>{job.company}</h3>
							<div className={styles.workRole}>{job.role}</div>
							<div className={styles.workYears}>{job.years}</div>
							<div className={styles.workHighlight}>{job.highlight}</div>
						</div>
					))}
				</div>
			</section>

			{/* Fun Facts */}
			<section aria-label="Fun facts" className={styles.factsSection}>
				<h2 className={styles.sectionTitle}>Fun Facts</h2>
				<div className={styles.factsGrid}>
					{funFacts.map((fact) => (
						<div key={fact.label} className={styles.factCard}>
							{fact.icon.startsWith('/images/') ? (
								<img src={fact.icon} alt={fact.label} className={styles.factIcon} style={{ width: 40, height: 40, borderRadius: '50%' }} />
							) : (
								<span className={styles.factIcon} aria-hidden>{fact.icon}</span>
							)}
							<span className={styles.factLabel}>{fact.label}</span>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section aria-label="Skills" className={styles.skillsSection}>
				<h2 className={styles.sectionTitle}>Skills</h2>
				<div className={styles.skillsGrid}>
					{skills.map((skill) => (
						<span key={skill} className={styles.skillTag}>{skill}</span>
					))}
				</div>
			</section>
		</section>
	);
}
