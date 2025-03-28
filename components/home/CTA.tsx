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
				<div className="relative w-full max-w-5xl rounded-md overflow-hidden bg-white/10 backdrop-blur-md shadow-lg border border-white/20 mt-5">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.7302932744697!2d-82.2589777!3d27.910248799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cd9d8fda09d9%3A0xd8b6b61d407612b1!2sAir%20It%20Cool!5e0!3m2!1sen!2sph!4v1743183249364!5m2!1sen!2sph"
						width="100%"
						height="800px"
						className="w-full h-72 border-none rounded-t-md"
					></iframe>
					<div className="bg-black/30 backdrop-blur-md p-4 text-white rounded-b-2xl">
					<div className="text-lg font-semibold">
							Air It Cool
						</div>
					</div>
				</div>

				<p className="font-medium text-white text-[20px] pt-5">
					Don’t let a faulty AC or heater ruin your comfort! At Air It
					Cool, we provide fast, reliable, and affordable HVAC repair,
					maintenance, and installation services in Hillsborough
					County and Valrico, Florida.
				</p>
				<Link
					href={"/contact"}
					className="mt-7 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600"
				>
					Book a Service Now
				</Link>
			</div>
		</div>
	);
};

export default CTA;
