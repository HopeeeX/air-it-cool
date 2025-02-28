import Image from "next/image";
import Link from "next/link";
import React from "react";

const Area = () => {
	return (
		<div className="relative w-full min-h-screen flex items-center justify-center text-center py-16">
			{/* Background Image */}
			<div className="absolute inset-0 w-full h-full">
				<Image
					src="/service_area.jpg"
					alt="service_area"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/55"></div>

			{/* Content */}
			<div className="relative w-full max-w-6xl px-5 text-white flex flex-col items-center justify-center py-16">
				<h2>Our Service Area</h2>
				<h1 className="text-3xl font-bold">
					Professional HVAC Repair in Hillsborough County
				</h1>

				<div className="relative w-full max-w-5xl rounded-md overflow-hidden bg-white/10 backdrop-blur-md shadow-lg border border-white/20 mt-5">
					<iframe
						src="https://maps.google.com/maps?q=Hillsborough%20County,Florida&output=embed"
						width="100%"
						height="800px"
						className="w-full h-72 border-none rounded-t-md"
					></iframe>
					<div className="bg-black/30 backdrop-blur-md p-4 text-white rounded-b-2xl">
						<div className="text-lg font-semibold">
							Hillsborough County Area
						</div>
						<div className="text-sm opacity-70">Air It Cool</div>
					</div>
				</div>

				<p className="text-[18px] font-medium mt-12">
					When it comes to reliable HVAC repair in Hillsborough
					County, we are your go-to experts. Our highly skilled
					technicians are committed to keeping your home or business
					comfortable year-round. Whether you’re facing a broken AC in
					the summer heat or a faulty heating system in the winter, we
					provide fast, efficient, and professional service to restore
					your system to peak performance. We proudly serve
					Hillsborough County, and all surrounding areas with top-tier
					HVAC solutions. Our team is equipped to handle repairs,
					maintenance, and system replacements for all major brands,
					ensuring your comfort is never compromised.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 md:gap-5">
					<div className="flex flex-col justify-center items-center bg-white/25 backdrop-blur-sm rounded-md shadow-md py-8 px-8">
						<Image
							src="/support.png"
							alt="calendar"
							width={64}
							height={64}
						/>
						<h2 className="mt-4 text-[20px] text-white font-bold">
							24/7 Emergency <br /> Services
						</h2>
					</div>

					<div className="flex flex-col justify-center items-center bg-white/25 backdrop-blur-sm rounded-md shadow-md py-8 px-8">
						<Image
							src="/technician.png"
							alt="calendar"
							width={64}
							height={64}
						/>
						<h2 className="mt-4 text-[20px] text-white font-bold">
							Licensed & Insured <br /> Technicians
						</h2>
					</div>

					<div className="flex flex-col justify-center items-center bg-white/25 backdrop-blur-sm rounded-md shadow-md py-8 px-8">
						<Image
							src="/response.png"
							alt="calendar"
							width={64}
							height={64}
						/>
						<h2 className="mt-4 text-[20px] text-white font-bold">
							Fast Response <br /> Quality Workmanship
						</h2>
					</div>
				</div>
				<Link href="https://maps.app.goo.gl/4GF1VLSB6UsZWcrs9" className="mt-8 bg-blue-500 text-white text-[20px] px-7 py-4 rounded-md font-semibold hover:bg-blue-600">
					See Our Service Area
				</Link>
			</div>
		</div>
	);
};

export default Area;
