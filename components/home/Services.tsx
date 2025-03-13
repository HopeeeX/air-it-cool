import React from "react";
import Image from "next/image";

const services = [
	{
		src: "/aircon.png",
		alt: "aircon",
		title: "Air Conditioning",
		description:
			"Our highly trained technicians repair all AC brands, fast and efficiently.",
	},
	{
		src: "/hvac.png",
		alt: "hvac",
		title: "HVAC System",
		description:
			"From minor fixes to full system installations, we’ve got you covered.",
	},
	{
		src: "/duct.png",
		alt: "duct",
		title: "Air Duct Cleaning",
		description:
			"Improve your indoor air quality and HVAC efficiency with our professional duct cleaning services.",
	},
	{
		src: "/calendar.png",
		alt: "calendar",
		title: "Emergency Services",
		description: "Available 24/7 – We’re there when you need us most.",
	},
];

const Services = () => {
	return (
		<div className="flex flex-col justify-center items-center py-10 mb-7">
			<h1 className="text-black font-extrabold text-3xl md:text-4xl">
				Our Services
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
				{services.map((service, index) => (
					<div
						key={index}
						className="flex flex-col justify-center items-center border rounded-md shadow-md p-6 md:p-8"
					>
						<Image
							src={service.src}
							alt={service.alt}
							width={64}
							height={64}
						/>
						<h2 className="mt-4 text-2xl text-[#0d2340] font-bold text-center">
							{service.title}
						</h2>
						<p className="mt-2 max-w-md text-lg text-[#0d2340] text-center font-medium">
							{service.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
