import Navbar from '@/components/Navbar';

export default function About() {
	return (
		<>
			<Navbar
				links={{
					title: 'About',
					others: [
						['Home', '/'],
						['Dashboard', '/dashboard'],
					],
				}}
			/>
			<p className="flex text-xl py-5 px-5">
				Next Namer is Small Side-Project built with Next.js, Typescript and
				TailwindCSS.
			</p>
		</>
	);
}
