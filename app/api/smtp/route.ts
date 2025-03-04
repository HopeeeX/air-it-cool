import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const {from, to, subject, text} = req.body()
	
	const { data, error } = await resend.emails.send({
		from: from,
		to: to,
		subject: subject,
		text: text,
	});

	if (error) {
		return res.status(400).json(error);
	}

	res.status(200).json(data);
}
