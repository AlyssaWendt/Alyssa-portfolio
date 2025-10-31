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
	},
	{
		blurb: 'Wordle clone with animations, keyboard controls, and AI word generation.',
		cover: 'wordle-cover.png',
		demo: 'https://wordle-xi-six.vercel.app/',
		repo: 'https://github.com/AlyssaWendt/Wordle',
		tech: ['TypeScript', 'Sass', 'Vite', 'OpenAI API'],
		title: 'Interactive Wordle Game'
	}
]
