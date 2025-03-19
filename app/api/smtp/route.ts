import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(req: NextRequest) {
	const { fullName, email, location, service, message } = await req.json();

	const { data, error } = await resend.emails.send({
		from: "Air It Cool Website <onboarding@resend.dev>",
		to: "joferusa43@gmail.com",
		subject: `Inquiry from Air It Cool Website By ${fullName}`,
		text: `Name: ${fullName}\nEmail: ${email}\nLocation: ${location}\nService: ${service}\nMessage:\n${message}`,
		replyTo: email
	});

	if (error) {
		return new Response(error.message, { status: 400 });
	}

	return new Response(data?.id, { status: 200 });
}
