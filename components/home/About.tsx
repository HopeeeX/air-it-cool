import Image from "next/image";
import Link from "next/link";
import React from "react";



const About = () => {
	return (
		<div className="flex flex-col justify-center items-center py-24 gap-24 mx-5">
			{/* First Content */}
			<div className="flex flex-col min-[1246px]:flex-row justify-between gap-14 items-center">
				<div>
					<Image
						src="/About_Image1.jpg"
						alt="HVAC"
						width={550}
						height={550}
						className="rounded-md"
					/>
				</div>

				<div className="flex flex-col justify-center items-center min-[1246px]:justify-start min-[1246px]:items-start">
					<h2 className="text-[16px] text-[#2478c0] font-semibold">
						About
					</h2>
					<h1 className="text-3xl text-black font-black min-[1246px]:w-[500px] w-fit text-center min-[1246px]:text-start">
						Your Trusted Professional HVAC Repair!
					</h1>
					<p className="min-[1246px]:w-[550px] w-4/5 text-[18px] text-black font-normal mt-5 text-center min-[1246px]:text-start">
						Since 2012, Air It Cool has prioritized honesty and
						reliability, earning a strong reputation as one of Tampa
						Bay's most trusted HVAC companies. Committed to quality
						service, they believe long-term success comes from
						building trust rather than cutting corners or pushing
						unnecessary repairs. Owner Y. Ulloa, who began
						apprenticing in HVAC at 16 while working with his
						stepfather, has cultivated deep expertise, driving the
						company’s focus on dependable, consistent service
						throughout the Bay Area.
					</p>
					<Link href={"#contact"} className="mt-10 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600 w-fit">
						Book Appointment
					</Link>
				</div>
			</div>

			{/* Second Content */}
			<div className="flex flex-col min-[1246px]:flex-row min-[1246px]:justify-between gap-14 items-center">
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
		</div>
	);
};

export default About;
