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
			<div className="absolute inset-0 bg-black/55"></div>

			{/* Content */}
			<div className="relative w-full max-w-6xl px-5 text-white flex flex-col items-center justify-center py-16">
				<h2>Professional HVAC Repair Service</h2>
				<h1>
					Want to Stay Cool & Comfortable? Book Your HVAC Service
					Today!
				</h1>
				<p>
					Don’t let a faulty AC or heater ruin your comfort! At Air It
					Cool, we provide fast, reliable, and affordable HVAC repair,
					maintenance, and installation services in Hillsborough
					County and Valrico, Florida.
				</p>
			</div>
		</div>
	);
};

export default CTA;
