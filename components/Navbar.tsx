'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, buttonVariants } from './ui/button';

function capitalizeFirstLetter(string: string) {
	return string[0].toUpperCase() + string.slice(1);
}

type Navbar = {
	links: string[][];
};

export default function Navbar({ links }: Navbar) {
	const pathname = usePathname().replace('/', '');

	const title = pathname === '' ? 'Home' : capitalizeFirstLetter(pathname);

	return (
		<header className={`container sticky top-0 z-101`}>
			<div className="flex h-20 items-center justify-between py-6">
				<div className="flex gap-6 md:gap-10">
					<Link href="/" className="hidden items-center space-x-2 md:flex">
						<span className="hidden font-bold sm:inline-block">{title}</span>
					</Link>
					{links?.length ? (
						<nav className="hidden gap-6 md:flex md:items-center md:justify-between">
							{links?.map((item, index) => (
								<Link
									key={index}
									href={item[1]}
									className={cn(
										'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'
									)}
								>
									{item[0]}
								</Link>
							))}
						</nav>
					) : null}
				</div>
				<nav>
					<Link
						className={cn(
							buttonVariants({ variant: 'default', size: 'sm' }),
							'px-6'
						)}
						href={''}
					>
						Login
					</Link>
				</nav>
			</div>
		</header>
	);
}
