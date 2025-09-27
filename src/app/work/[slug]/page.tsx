import Image from 'next/image'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'

export async function generateStaticParams() {
	return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);
    return {
        title: project ? `${project.title} – Alyssa Wendt` : 'Work – Alyssa Wendt',
        description: project?.blurb
    };
}

export default async function ProjectPage({ params }: { params: any }) {
	const { slug } = await params;
	const project = projects.find(p => p.slug === slug);
	if (!project) return <main><p>Not found</p></main>;

	return (
		<main className='section'>
			<h1>{project.title}</h1>
			<p className='subtle'>{project.blurb}</p>

			{project.cover && (
				<Image src={project.cover} alt='' width={1200} height={630} priority />
			)}

			{project.impact?.length ? (
				<ul>
					{project.impact.map((i, idx) => <li key={idx}>{i}</li>)}
				</ul>
			) : null}

			<p>{project.tech.join(' · ')}</p>

			<div style={{ display: 'flex', gap: '1rem' }}>
				{project.repo && <a href={project.repo}>Code</a>}
				{project.demo && <a href={project.demo}>Live</a>}
			</div>
		</main>
	);
}
