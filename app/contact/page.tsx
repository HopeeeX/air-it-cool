import React from "react";
import Image from "next/image";
import Card from "@/components/contact/Card";
import Contact from "@/components/contact/Contact";

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
		</div>
	);
};

export default page;
