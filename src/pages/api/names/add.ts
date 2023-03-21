import type { NextApiRequest, NextApiResponse } from 'next';
import names from '../../../data/names.json';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const f_name: string = names[Math.floor(Math.random() * names.length)];
		const l_name: string = names[Math.floor(Math.random() * names.length)];

		res.status(200).json({ first_name: f_name, last_name: l_name });
	} catch (err) {
		res.status(500).json(err);
	}
}
