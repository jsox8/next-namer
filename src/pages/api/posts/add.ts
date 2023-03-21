// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const post = await prisma.posts.create({
			data: {
				title: 'This is my post title!',
				body: 'This is my post body!',
			},
		});

		return res.status(201).json({ code: res.status, data: post });
	} catch (err) {
		return res.status(500).json(err);
	}
}
