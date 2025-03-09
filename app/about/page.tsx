import React from "react";
import Image from "next/image";
import AboutUs from "@/components/about/AboutUs";
import CTA from "@/components/home/CTA";

const page = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="relative w-full flex items-center justify-center text-center py-20">
				{/* Background Image */}
				<div className="absolute inset-0 w-full">
					<Image
						src="/About_Banner.jpg"
						alt="cta"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/75"></div>

				{/* Content */}
				<div className="relative w-full max-w-6xl px-5 text-white flex flex-col items-center justify-center">
					<h1 className="font-bold text-3xl">About Us</h1>
					<p className="font-medium text-white text-[20px] pt-5">
						At Air It Cool Air Conditioning & Heating, we believe
						that comfort starts with quality service. Since 2012,
						we’ve been providing top-notch heating, air
						conditioning, and air duct cleaning services throughout
						the Bay Area, including Hillsborough, Pinellas & Pasco
						County. Our team of experienced and reliable technicians
						is dedicated to keeping your home or business
						comfortable all year round.
					</p>
				</div>
			</div>
            <AboutUs/>
            <CTA/>
		</div>
	);
};

export default page;
