import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(req: NextRequest) {
	const { from, to, subject, text } = await req.json();

	const { data, error } = await resend.emails.send({
		from: from,
		to: to,
		subject: subject,
		text: text,
	});

	if (error) {
		return new Response(error.message, { status: 400 });
	}

	return new Response(data?.id, { status: 200 });
}
