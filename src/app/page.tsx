import Hero from '@/components/Hero'
import HomeWorkPreview from '@/components/HomeWorkPreview'

export default function Home() {
	return (
		<>
			<Hero />
			<section className='section' aria-label='Selected work'>
				<HomeWorkPreview />
			</section>
		</>
	)
}
