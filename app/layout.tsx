import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { Toaster } from 'sonner';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata = {
	title: 'Home',
	description: "Here's the homepage.",
};

const fontSans = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background dark:bg- font-sans antialiased',
					fontSans.variable
				)}
			>
				<Navbar
					links={[
						['Home', '/'],
						['About', '/about'],
						['Dashboard', '/dashboard'],
					]}
				/>
				<main className="flex overflow-hidden justify-center">{children}</main>
				{/* <Toaster /> */}
			</body>
		</html>
	);
}
