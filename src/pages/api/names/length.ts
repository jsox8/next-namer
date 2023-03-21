import type { NextApiRequest, NextApiResponse } from 'next';
import names from '../../../data/names.json';

function numberWithCommas(x: number) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	return res.status(200).json({ length: numberWithCommas(names.length) });
}
