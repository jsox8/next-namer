import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const results = await prisma.posts.findMany();
		return res.status(200).json(results);
	} catch (err) {
		return res.status(500).json(err);
	}
}
