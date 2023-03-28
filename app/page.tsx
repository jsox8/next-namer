'use client';

import FetchNamesLength from '@/lib/FetchNamesLength';
import FetchNewName from '@/lib/FetchNewName';

import { useEffect, useState } from 'react';

export default function Home() {
	const [name, changeName] = useState<string[]>([]);
	const [length, setLength] = useState('');
	const [saveName, setSaveName] = useState('');

	function handleNewName() {
		const names: { first_name: string; last_name: string } = FetchNewName();

		changeName([names.first_name, names.last_name]);
	}

	function handleCopyName() {
		if (name.length === 0) {
			// toast.warning('Generate a Name First!', {
			// 	position: toast.POSITION.BOTTOM_RIGHT,
			// });
			return;
		}

		navigator.clipboard.writeText(
			name.length !== 0 ? `${name[0]} ${name[1]}` : ''
		);

		// toast.success('Copied to Clipboard!', {
		// 	position: toast.POSITION.BOTTOM_RIGHT,
		// });
	}

	function handleNameSave() {
		if (typeof window !== 'undefined') {
			const names = JSON.parse(localStorage.getItem('names') || '[]');

			const fullName = `${name[0]} ${name[1]}`;

			if (
				!names.some((e: { name: string; date: Date }) => e.name === fullName)
			) {
				names.push({ name: fullName, date: new Date().toLocaleString() });
			}

			localStorage.setItem('names', JSON.stringify(names));

			// toast.success('Name saved successfully!', {
			// 	position: toast.POSITION.BOTTOM_RIGHT,
			// });
		}
	}

	useEffect(() => {
		setLength(FetchNamesLength().length);
	}, []);

	return (
		<>
			<div className="flex-1 justify-center mt-20">
				<div className="flex justify-center p-5">
					<h1 className="text-3xl font-bold">
						{name.length !== 0
							? `${name[0]} ${name[1]}`
							: 'Click the button to change!'}
					</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mt-2 ml-2 h-6 w-6 shadow-mdactive:translate-y-1 hover:cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						onClick={handleCopyName}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
						/>
					</svg>
				</div>
				<div className="flex justify-center">
					{/* Button 1 */}
					<button
						onClick={handleNewName}
						className="inline-flex items-center justify-center mr-2 px-5 py-3 text-base font-medium text-center text-slate-200 rounded-lg shadow-sm cursor-pointer hover:opacity-80 bg-teal-600 dark:bg-teal-500"
					>
						<svg
							className="w-5 h-5 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							></path>
						</svg>
						<span className="relative">Generate New Name</span>
					</button>
					{/* Button 2 */}
					{name.length === 2 && (
						<button
							className="inline-flex items-center justify-center mr-2 px-5 py-3 text-base font-medium text-center text-slate-200 rounded-lg shadow-sm cursor-pointer hover:opacity-80 bg-blue-600 dark:bg-blue-500"
							onClick={handleNameSave}
						>
							<svg
								className="w-5 h-5 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path>
							</svg>
							<span className="relative">Save Name</span>
						</button>
					)}
				</div>
			</div>
			<footer className="fixed bottom-0 px-2 py-2">
				{`There are currently ${length} names available.`} Built with
				<a href="https://nextjs.org/"> Next.js</a>
			</footer>
		</>
	);
}
