export type Project = {
	blurb: string
	cover?: string
	demo?: string
	repo?: string
	tech: string[]
	title: string
}

export const projects: Project[] = [
	{
		blurb: 'React app to compare electric vehicle savings against average gas vehicles.',
		cover: 'cover.png',
		demo: 'https://ev-estimator.vercel.app',
		repo: 'https://github.com/AlyssaWendt/ev-estimator',
		tech: ['React', 'TypeScript', 'Sass'],
		title: 'EV Cost Savings Estimator'
	}
]
