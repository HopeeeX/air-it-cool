import Image from "next/image";
import React from "react";



const About = () => {
	return (
		<div className="flex flex-col justify-center items-center py-24 gap-24">
			{/* First Content */}
			<div className="flex justify-between gap-14 items-center">
				<div>
					<Image
						src="/About_Image1.jpg"
						alt="HVAC"
						width={550}
						height={550}
						className="rounded-md"
					/>
				</div>

				<div>
					<h2 className="text-[16px] text-[#2478c0] font-semibold">
						About
					</h2>
					<h1 className="text-[35px] text-black font-black w-[500px]">
						Your Trusted Professional HVAC Repair!
					</h1>
					<p className="w-[550px] text-[18px] text-black font-normal mt-5">
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
					<button className="mt-10 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600">
						Book Appointment
					</button>
				</div>
			</div>

			{/* Second Content */}
			<div className="flex justify-between gap-14 items-center">
				<div>
					<h2 className="text-[16px] text-[#2478c0] font-semibold">
						Why Choose Us
					</h2>
					<h1 className="text-[35px] text-black font-black w-[550px]">
						Keep Your Home Comfortable with Our Services
					</h1>
					<p className="w-[550px] text-[18px] text-black font-normal mt-5">
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
					<button className="mt-10 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600">
						Learn More About Us
					</button>
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
