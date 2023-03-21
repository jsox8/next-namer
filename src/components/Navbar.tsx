import Link from 'next/link';
import { type } from 'os';

type Navbar = {
	title: string;
	name: string;
	link: string;
};

export default function Navbar({ name, link, title }: Navbar) {
	return (
		<>
			<nav className="flex items-center flex-wrap p-5 ">
				<span className="font-semibold text-2xl text-white tracking-wide">
					{title}
				</span>
				<div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
					<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
						<Link
							href={link}
							className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-white font-normal items-center justify-center"
						>
							{name}
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
