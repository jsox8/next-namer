import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
	const [name, changeName] = useState<string[]>([]);
	const [length, setLength] = useState(0);

	async function FetchNewName() {
		const res: { first_name: string; last_name: string } = await (
			await fetch(`http://localhost:3000/api/names/add`)
		).json();

		changeName([res.first_name, res.last_name]);
	}

	async function getNamesLength() {
		const res = await (
			await fetch(`http://localhost:3000/api/names/length`)
		).json();

		setLength(res.length);
	}

	getNamesLength();

	return (
		<>
			<Navbar title={'Home'} name={'About'} link={'/about'} />
			<div className="flex justify-center py-5">
				<h2 className="font-medium px-5 py-5 text-2xl">
					{name.length !== 0
						? `${name[0]} ${name[1]}`
						: 'Click the button to change!'}
				</h2>
			</div>
			<div className="flex justify-center ">
				<button
					onClick={FetchNewName}
					className="py-2 px-10 bg-sky-500 text-white font-medium rounded-lg text-center"
				>
					Change your name!
				</button>
			</div>
			<footer className="fixed bottom-0 px-2 py-2">
				{`There are currently ${length} names available.`} Built with
				<a href="https://nextjs.org/"> Next.js</a>
			</footer>
		</>
	);
}
