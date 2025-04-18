import Image from "next/image";
import React from "react";
import Services from "@/components/home/Services";
import CTA from "@/components/home/CTA";
import { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
	title: "HVAC Services | Repairs, Installation & Maintenance | Air It Cool",
	description:
		"Explore Air It Cool’s comprehensive HVAC services, including AC repair, furnace maintenance, heating system installation, and indoor air quality solutions.",
	keywords: [
		"HVAC services",
		"air conditioning services in valrico",
		"air conditioning repair",
		"air conditioning services in hillsborough county",
		"furnace maintenance",
		"heating system installation",
		"indoor air quality solutions",
	],
	alternates: {
		canonical: "https://airitcool.com/services",
	},
};

const page = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="relative w-full flex items-center justify-center text-center py-20">
				{/* Background Image */}
				<div className="absolute inset-0 w-full">
					<Image
						src="/Services_Banner.jpg"
						alt="cta"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/75"></div>

				{/* Content */}
				<div className="relative w-full max-w-6xl px-5 text-white flex flex-col items-center justify-center">
					<h1 className="font-bold text-3xl">Services</h1>
					<p className="font-medium text-white text-[20px] pt-5">
						At Air It Cool Air Conditioning & Heating, we specialize
						in heating system repair, air conditioning repair, and
						air duct cleaning to ensure your home or business stays
						comfortable all year round. Our expert technicians
						provide reliable, high-quality service throughout
						Hillsborough, Pinellas & Pasco County.
					</p>
				</div>
			</div>

			<div className="flex flex-col min-[1246px]:flex-row min-[1246px]:justify-between gap-14 items-center py-14">
				<div className="flex flex-col justify-center items-center min-[1246px]:justify-start min-[1246px]:items-start">
					<h2 className="text-[16px] text-[#2478c0] font-semibold">
						Why Choose Us
					</h2>
					<h1 className="text-3xl text-black font-black min-[1246px]:w-[500px] w-fit min-[1246px]:text-start text-center">
						Keep Your Home Comfortable with Our Services
					</h1>
					<p className="min-[1246px]:w-[550px] w-4/5 text-[18px] text-black font-normal mt-5 text-center min-[1246px]:text-start">
						AIR IT COOL Air Conditioning & Heating, serving the Bay
						Area since 2012, is your go-to for HVAC repairs. Our
						highly trained, courteous technicians handle all brands
						and honor most warranties. We guarantee all labor and
						parts, offering fast, reliable repairs with top-quality
						components. Our technicians are on time, or you get 10%
						off your service call. We also provide free estimates
						for new AC system replacements, with no hidden charges
						and prior approval on all repairs.
					</p>
					<Link href={"/about"} className="mt-10 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600">
						Learn More About Us
					</Link>
				</div>

				<div>
					<Image
						src="/About_Image2.jpg"
						alt="HVAC"
						width={550}
						height={550}
						className="rounded-md"
					/>
				</div>
			</div>
			<Services />
			<div className="flex flex-col justify-center items-center w-full px-5 mb-20">
				<h1 className="text-black font-extrabold text-3xl md:text-4xl mb-6">
					Our Service Area
				</h1>
				<div className="w-full max-w-6xl">
					<iframe
						src="https://maps.google.com/maps?q=Chicago,Illinois&output=embed"
						className="w-full h-[600px] border-none rounded-md"
					/>
				</div>
			</div>

			<CTA />
		</div>
	);
};

export default page;
