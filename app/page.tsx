"use client";

import About from "@/components/home/About";
import Area from "@/components/home/Area";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
});

const Page = () => {
	return (
		<div>
			<div className="relative w-full h-screen flex items-center justify-center">
				{/* Background Video */}
				<video
					autoPlay
					loop
					muted
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src="/Banner_Vid.mp4" type="video/mp4" />
				</video>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/40"></div>

				{/* Text Content */}
				<div className="relative w-full max-w-6xl px-5 text-white">
					<div className="w-3/4">
						<h1 className="text-[50px] font-bold leading-tight">
							Trusted HVAC & Air Conditioning Services Since 2012!
						</h1>
						<p className="mt-7 text-[20px]">
							At Air It Cool, We Take Your Safety Seriously. We're
							Fully Licensed, Insured, and Bonded. Trust Our
							Technicians for Reliable, Fast, and Affordable
							Service.
						</p>
						<div className="flex gap-8">
							<button className="mt-7 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600">
								Book a Service Now
							</button>

							<button className="mt-8 text-white text-[18px] px-7 py-5 rounded-lg font-semibold border-2 hover:bg-blue-600">
								See More Services
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${montserrat.className} flex flex-col`}>
				<About/>
				<Services/>
				<Area/>
				<Testimonial/>
				<FAQ/>
				<CTA/>
			</div>
		</div>
	);
};

export default Page;
