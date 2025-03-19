import { Metadata } from 'next';
import Image from "next/image";
import Card from "@/components/contact/Card";
import Contact from "@/components/contact/Contact";
import CTA from '@/components/home/CTA';

export const metadata : Metadata = {
	title: "Contact Air It Cool | Schedule Your HVAC Service Today",
	description:
		"Get in touch with Air It Cool for expert HVAC services. Contact us to book a repair, request a free estimate, or speak with our team about your heating and cooling needs.",
	keywords: [
		"contact Air It Cool",
		"HVAC service booking",
		"request HVAC estimate",
		"speak with HVAC experts",
		"air conditioning service contact",
	],
	alternates: {
		canonical: "https://airitcool.com/contact",
	},
};

const page = () => {
	return (
		<div>
			<div className="relative w-full flex items-center justify-center text-center py-20">
				{/* Background Image */}
				<div className="absolute inset-0 w-full">
					<Image
						src="/Contact_Banner.jpg"
						alt="cta"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/75"></div>

				{/* Content */}
				<div className="relative w-full max-w-6xl px-5 text-white flex flex-col items-center justify-center">
					<h1 className="font-bold text-3xl">Contact Us</h1>
					<p className="font-medium text-white text-[20px] pt-5">
						At Air It Cool Air Conditioning & Heating, your comfort
						is our priority. Since 2012, we’ve been delivering
						expert heating, air conditioning, and air duct cleaning
						services across the Bay Area, including Pinellas & Pasco
						County. Whether it’s a routine tune-up or an urgent
						repair, our experienced and trustworthy technicians are
						here to keep your home or business comfortable
						year-round.
					</p>
				</div>
			</div>
			<div className="py-20">
				<Card />
			</div>
			<Contact />
			<CTA/>
		</div>
	);
};

export default page;
