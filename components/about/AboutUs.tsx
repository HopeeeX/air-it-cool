import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
	return (
		<div className="flex flex-col justify-center items-center py-24 gap-24 mx-5">
			{/* First Content */}
			<div className="flex flex-col min-[1246px]:flex-row justify-between gap-14 items-center">
				<div>
					<Image
						src="/hvac1.jpg"
						alt="HVAC"
						width={550}
						height={550}
						className="rounded-md"
					/>
				</div>

				<div className="flex flex-col justify-center items-center min-[1246px]:justify-start min-[1246px]:items-start">
					<h2 className="text-[16px] text-[#2478c0] font-semibold">
						About Us
					</h2>
					<h1 className="text-3xl text-black font-black min-[1246px]:w-[500px] w-fit text-center min-[1246px]:text-start">
						Your Trusted Professional HVAC Repair!
					</h1>
					<p className="min-[1246px]:w-[550px] w-4/5 text-[16px] text-black font-normal mt-5 text-center min-[1246px]:text-start">
						Since 2012 while only doing minor repairs honesty and
						reliability has been Air It Cool’s number one priority,
						Air It Cool Heating and Air Conditioning has built a
						solid reputation as one of Tampa Bay’s most trusted Air
						Conditioning and Heating Company. We are committed to
						providing quality service to the community. We believe
						that a reputation as honest and reliable service
						technicians is the recipe for success. While others seek
						to profit by cutting corners, or recommending
						unnecessary services to customers, Air It Cool Air
						Conditioning & Heating believes that a good reputation
						and consistent service will reap bigger profits in the
						long run. By being trustworthy, we believe that we will
						enjoy a long term profitable business that serves the
						Bay Area.
					</p>
					<Link href={"/contact"} className="mt-10 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600 w-fit">
						Book Appointment
					</Link>
				</div>
			</div>

			{/* Second Content */}
			<div className="flex flex-col min-[1246px]:flex-row min-[1246px]:justify-between gap-14 items-center">
				<div className="flex flex-col justify-center items-center min-[1246px]:justify-start min-[1246px]:items-start">
					<h2 className="text-[16px] text-[#2478c0] font-semibold">
						Know More About Air It Cool
					</h2>
					<h1 className="text-3xl text-black font-black min-[1246px]:w-[500px] w-fit min-[1246px]:text-start text-center">
						Keep Your Home Comfortable with Our Services
					</h1>
					<p className="min-[1246px]:w-[550px] w-4/5 text-[18px] text-black font-normal mt-5 text-center min-[1246px]:text-start">
						Before Air It Cool was around owner Y. Ulloa grew up in
						Miami, FL, helping his Stepfather repair A/C systems for
						his company. Mr. Ulloa began apprenticing at the age of
						16 and has developed a deep knowledge and understanding
						of HVAC Systems. Proudly providing affordable heating &
						air conditioning repair, sales and service with honesty
						and integrity to Tampa – Valrico - Brandon - Plant City
						– Bloomingdale – Mango – Seffner – Riverview - Sun City
						– Dover – Gibsonton - Palm River-Clair Mel, FL and
						surrounding areas.
					</p>
					<Link href={"/about"} className="mt-10 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600">
						Learn More About Us
					</Link>
				</div>

				<div>
					<Image
						src="/hvac2.jpg"
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

export default AboutUs;
