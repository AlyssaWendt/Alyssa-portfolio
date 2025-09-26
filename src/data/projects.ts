export type Project = {
	slug: string
	title: string
	blurb: string
	tech: string[]
	repo?: string
	demo?: string
	impact?: string[]
	cover?: string
}

export const projects: Project[] = [
	{
		slug: 'ev-estimator',
		title: 'EV Cost Savings Estimator',
		blurb: 'React build with typed inputs and live savings math.',
		tech: ['React', 'TypeScript', 'Sass'],
		repo: 'https://github.com/AlyssaWendt/ev-estimator',
		demo: 'https://ev-estimator.vercel.app',
		impact: ['80% unit test coverage', 'CLS 0.00', '40% smaller bundle'],
		cover: '/og/ev-estimator.png'
	}
]
