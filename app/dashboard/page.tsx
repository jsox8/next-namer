'use client';

import { Name } from '@/types';

export function generateMetadata() {
	return {
		title: 'Dashboard',
		description: '',
	};
}

function FetchSavedNames() {
	if (typeof window !== 'undefined') {
		const names = JSON.parse(localStorage.getItem('names') || '[]');

		return names;
	}
}

export default function DashboardPage() {
	const names = FetchSavedNames() || [];

	return (
		<>
			<h1 className="p-2 text-center font-semibold text-3xl">DashboardPage</h1>

			<ul className="my-5">
				{names.map((data: Name) => (
					<div className="p-5 bg-amber-200">
						<h1 className="font-medium text-lg text-stone-700">{data.name}</h1>

						<span className="relative"></span>
					</div>
				))}
			</ul>
		</>
	);
}
