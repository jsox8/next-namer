import Navbar from '@/components/Navbar';

export default function About() {
	return (
		<>
			<Navbar title={'About'} name={'Home'} link={'/'} />

			<h1 className="flex font-semibold text-2xl py-5 px-5">
				This page is still W.I.P
			</h1>
		</>
	);
}
