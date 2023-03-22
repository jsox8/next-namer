export default function ButtonGradient({
	name,
	func,
	type,
}: {
	name: string;
	func: Function;
	type: string;
}) {
	return (
		<>
			{type === 'green' ? (
				<a
					onClick={() => func()}
					className={`inline-flex items-center justify-center mr-2 px-5 py-3 text-base font-medium text-center text-indigo-100 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-bl from-green-400 via-green-500 to-green-600`}
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
					<span className="relative">{name}</span>
				</a>
			) : (
				<a
					onClick={() => func()}
					className={`inline-flex items-center justify-center mr-2 px-5 py-3 text-base font-medium text-center text-indigo-100 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-bl from-sky-400 via-sky-500 to-blue-500`}
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
					<span className="relative">{name}</span>
				</a>
			)}
		</>
	);
}

{
	/* <a
			onClick={() => func()}
			className={`inline-flex items-center justify-center mr-2 px-5 py-3 text-base font-medium text-center text-indigo-100 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-bl from-${
				type == 'green' ? 'green' : 'sky'
			}-400 via-${type == 'green' ? 'green' : 'sky'}-500 to-${
				type == 'green' ? 'green' : 'blue'
			}-${type == 'green' ? '700' : '500'}`}
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
			<span className="relative">{name}</span>
		</a> */
}
