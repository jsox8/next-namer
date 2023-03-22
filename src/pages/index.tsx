import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar';
import ButtonGradient from '@/components/UI/ButtonGradient';

const DEVELOPMENT_URL = 'http://localhost:3000';
const PRODUCTION_URL = 'https://next-namer.vercel.app';

export default function Home() {
	const [name, changeName] = useState<string[]>([]);
	const [length, setLength] = useState(0);
	const [saveName, setSaveName] = useState('');

	async function FetchNewName() {
		const res: { first_name: string; last_name: string } = await (
			await fetch(`${PRODUCTION_URL}/api/names/add`)
		).json();

		changeName([res.first_name, res.last_name]);
	}

	async function getNamesLength() {
		try {
			const res = await (
				await fetch(`${PRODUCTION_URL}/api/names/length`)
			).json();

			setLength(res.length);
		} catch (error) {
			console.log(error);
		}
	}

	function CopyName() {
		if (name.length === 0) {
			console.log('Here nono');
			toast.warning('Generate a Name First!', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			return;
		}

		console.log('Here yes!');
		navigator.clipboard.writeText(
			name.length !== 0 ? `${name[0]} ${name[1]}` : ''
		);

		toast.success('Copied to Clipboard!', {
			position: toast.POSITION.BOTTOM_RIGHT,
		});
	}

	function SaveName() {
		if (typeof window !== 'undefined') {
			const names = JSON.parse(localStorage.getItem('names') || '[]');

			const fullName = name[0] + ' ' + name[1];

			if (
				!names.some((e: { name: string; date: Date }) => e.name === fullName)
			) {
				names.push({ name: fullName, date: new Date().toLocaleString() });
			}

			localStorage.setItem('names', JSON.stringify(names));

			toast.success('Name saved successfully!', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		}
	}

	getNamesLength();

	return (
		<>
			<Navbar
				links={{
					title: 'Home',
					others: [
						['About', '/about'],
						['Dashboard', '/dashboard'],
					],
				}}
			/>
			<div className="flex justify-center py-5">
				<h2 className="font-medium px-5 py-5 text-2xl">
					{name.length !== 0
						? `${name[0]} ${name[1]}`
						: 'Click the button to change!'}
				</h2>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="mt-6 mr-3 h-6 w-6 shadow-mdactive:translate-y-1 hover:cursor-pointer"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					onClick={CopyName}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
					/>
				</svg>
			</div>
			<div className="flex justify-center place-items-center">
				<ButtonGradient
					name={'Change the Name!'}
					func={FetchNewName}
					type={'blue'}
				/>
				{name.length === 2 && (
					<ButtonGradient name={'Save Name'} func={SaveName} type={'green'} />
				)}
			</div>
			<footer className="fixed bottom-0 px-2 py-2">
				{`There are currently ${length} names available.`} Built with
				<a href="https://nextjs.org/"> Next.js</a>
			</footer>
			<ToastContainer />
		</>
	);
}
