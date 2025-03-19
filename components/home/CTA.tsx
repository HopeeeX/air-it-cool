import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
	return (
		<div className="relative w-full flex items-center justify-center text-center py-16">
			{/* Background Image */}
			<div className="absolute inset-0 w-full">
				<Image
					src="/cta.jpg"
					alt="cta"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/75"></div>

			{/* Content */}
			<div className="relative w-full max-w-6xl px-5 text-white flex flex-col items-center justify-center">
				<h2 className="font-semibold text-[18px] text-cyan-400">
					Professional HVAC Repair Service
				</h2>
				<h1 className="font-bold text-3xl">
					Want to Stay Cool & Comfortable? <br />
					Book Your HVAC Service Today!
				</h1>
				<p className="font-medium text-white text-[20px] pt-5">
					Don’t let a faulty AC or heater ruin your comfort! At Air It
					Cool, we provide fast, reliable, and affordable HVAC repair,
					maintenance, and installation services in Hillsborough
					County and Valrico, Florida.
				</p>
				<Link href={"/contact"} className="mt-7 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600">
					Book a Service Now
				</Link>
			</div>
		</div>
	);
};

export default CTA;
