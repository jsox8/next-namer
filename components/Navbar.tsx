import Link from 'next/link';

type Navbar = {
	data: { title: string; links: string[][] };
};

export default function Navbar({ data }: Navbar) {
	return (
		<nav className="flex items-center flex-wrap p-5 bg-slate-100 dark:bg-slate-800 sticky top-0 z-50">
			<span className="font-semibold text-2xl text-slate-900 dark:text-slate-100">
				{data.title}
			</span>

			<div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
				<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
					{data.links.map((link: string[], index: number) => (
						<Link
							key={index + 1}
							href={link[1]}
							className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-slate-900 dark:text-slate-100 font-medium items-center justify-center"
						>
							{link[0]}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
