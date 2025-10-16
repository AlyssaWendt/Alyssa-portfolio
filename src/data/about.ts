export interface WorkHistoryItem {
	company: string;
	role: string;
	years: string;
	highlight: string;
	logo: string;
}

export interface FunFact {
	icon: string;
	label: string;
}

export const workHistory: WorkHistoryItem[] = [
	{
		company: 'General Motors',
		role: 'Software Engineer',
		years: '2022-2025',
		highlight: 'Global Digital Platforms',
		logo: '/images/GM-icon.svg',
	},
	{
		company: 'US Army Reserve',
		role: 'IT Specialist (25B)',
		years: '2020-Present',
		highlight: 'Proud soldier',
		logo: '/images/army-icon.svg',
	},
	{
		company: 'Little Caesars',
		role: 'Help Desk Rep',
		years: '2019-2021',
		highlight: 'Tech support & troubleshooting',
		logo: '/images/lc-logo.svg',
	},
];

export const funFacts: FunFact[] = [
	{ icon: '📚', label: 'Bookworm' },
	{ icon: '/images/bodhi-avatar.png', label: 'Dog mom (Bodhi!)' },
	{ icon: '🇹🇭', label: 'Thai food lover' },
	{ icon: '🎮', label: 'Gamer' },
];

export const skills: string[] = [
	'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React', 'Next.js', 'Sass', 'Node.js',
	'AEM', 'Webpack', 'Vite', 'NPM', 'Git', 'GitHub', 'Azure DevOps', 'PostgreSQL', 'MongoDB',
	'Jest', 'JUnit', 'Chrome DevTools', 'Figma', 'Performance Optimization', 'Agile/Scrum', 'CI/CD Pipelines'
];