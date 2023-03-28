export function generateMetadata() {
	return {
		title: 'About',
		description: 'About page',
	};
}

export default function AboutPage() {
	return (
		<p className="flex justify-start text-xl p-5 text-left">
			Next Namer is Small Side-Project built with Next.js, Typescript and
			TailwindCSS.
		</p>
	);
}
