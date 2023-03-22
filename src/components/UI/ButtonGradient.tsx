export default function ButtonGradient({
	name,
	func,
}: {
	name: string;
	func: Function;
}) {
	return (
		<a
			onClick={() => func()}
			className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-bl from-sky-400 via-sky-500 to-blue-500"
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
			<span className="relative">Change your Name!</span>
		</a>
	);
}
