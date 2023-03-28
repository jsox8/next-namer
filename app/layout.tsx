'use client';

import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import '@/styles/globals.css';

function capitalizeFirstLetter(string: string) {
	return string[0].toUpperCase() + string.slice(1);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname().replace('/', '');
	return (
		<html lang="en">
			<body>
				<Navbar
					data={{
						title: pathname === '' ? 'Home' : capitalizeFirstLetter(pathname),
						links: [
							['Home', '/'],
							['About', '/about'],
							['Dashboard', '/dashboard'],
						],
					}}
				/>

				<main className="grid overflow-hidden justify-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
					{children}
				</main>
			</body>
		</html>
	);
}
