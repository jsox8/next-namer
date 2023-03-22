'use client';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (typeof window !== 'undefined') {
		// Perform localStorage action
		localStorage.setItem('names', JSON.stringify(['Hiwe']));

		const names = JSON.parse(localStorage.getItem('names') || '[]');
		return res.status(200).send(names);
	}

	return res.status(200).send('Nothing');

	// console.log(typeof names);
	// const saveName = req.body.name;

	// names.push(saveName);

	// localStorage.setItem('names', JSON.stringify(names));
}
