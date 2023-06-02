export function generateMetadata() {
	return {
		title: 'About',
		description: 'About page',
	};
}

export default function AboutPage() {
	return (
		<div className="flex justify-start text-xl p-5 text-left">
			<p>
				Next Namer is Small Side-Project built with Next.js, Typescript and
				TailwindCSS.
			</p>
		</div>
	);
}
