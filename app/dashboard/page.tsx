'use client';

import { Name } from '@/types';

function FetchSavedNames() {
	if (typeof window !== 'undefined') {
		const names = JSON.parse(localStorage.getItem('names') || '[]');

		return names;
	}
}

export default function DashboardPage() {
	console.log(FetchSavedNames());

	return (
		<>
			<div>DashboardPage</div>

			{/* <div>
				{names.map((data: Name) => (
					<div className="p-5 bg-amber-200">
						<h1 className="font-medium text-lg">{data.name}</h1>

						<span className="relative"></span>
					</div>
				))}
			</div> */}
		</>
	);
}
