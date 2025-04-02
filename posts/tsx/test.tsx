import React from "react";
import Image from "next/image";

const test = () => {
	return (
		<div className="flex flex-col">
			<p className="text-[16px] text-black/75 font-normal text-start">
				If you’ve heard the term HVAC but aren’t sure what it means,
				let’s break it down. HVAC stands for Heating, Ventilation, and
				Air Conditioning—a system responsible for keeping your indoor
				environment comfortable by regulating temperature, airflow, and
				air quality. Whether it's a cold winter night or a hot summer
				afternoon, your HVAC system ensures that your home or business
				stays at the right temperature.
			</p>
			<h2 className="text-2xl font-bold pt-3">
				Understanding HVAC Systems
			</h2>
			<p className="text-[16px] text-black/75 font-normal text-start pt-3">
				An HVAC system has three main components:
				<br />
				<br />
				✅ Heating – Provides warmth using a furnace, boiler, or heat
				pump during colder months. A properly functioning heating system
				ensures your home stays cozy and energy-efficient.
				<br />
				<br />
				✅ Ventilation – Ensures fresh air circulation, removing
				contaminants, excess moisture, and stale air. Proper ventilation
				improves indoor air quality and reduces allergens.
				<br />
				<br />✅ Air Conditioning – Cools and dehumidifies air, keeping
				indoor spaces comfortable in warm weather. A well-maintained air
				conditioning system prevents overheating and humidity issues.
			</p>
			<h2 className="text-2xl font-bold pt-3">
				What Does HVAC Repair Involve?
			</h2>
			<p className="text-[16px] text-black/75 font-normal text-start pt-3">
				Like any system, HVAC units experience wear and tear over time.
				HVAC repair ensures that your system functions optimally and
				efficiently. Common HVAC issues include:
				<br />
				<br />
				🔹 Weak airflow – Often caused by clogged filters, duct
				blockages, or blower motor issues. This can lead to inefficient
				cooling or heating.
				<br />
				<br />
				🔹 Uneven temperature – If some rooms are colder or hotter than
				others, there could be a thermostat malfunction, duct issue, or
				refrigerant leak.
				<br />
				<br />
				🔹 Strange noises – Rattling, banging, or hissing sounds may
				indicate loose parts, motor issues, or refrigerant leaks that
				need immediate attention.
				<br />
				<br />
				🔹 No cooling or heating – If your system isn’t producing warm
				or cold air, it could be due to a failing compressor, capacitor,
				or pilot light in gas systems.
				<br />
				<br />
				🔹 Increased energy bills – A malfunctioning HVAC system can
				consume more energy, leading to higher utility costs. Regular
				maintenance helps prevent unexpected breakdowns and excessive
				energy consumption.
			</p>
			<h2 className="text-2xl font-bold pt-3">
				Why Is HVAC Maintenance Important?
			</h2>
			<p className="text-[16px] text-black/75 font-normal text-start">
				Regular HVAC maintenance extends the life of your system,
				prevents costly repairs, and ensures peak efficiency. Simple
				steps like changing air filters, cleaning vents, and scheduling
				professional tune-ups can keep your system running smoothly
				year-round.
			</p>
			<h2 className="text-2xl font-bold pt-3 pb-3">Conclusion</h2>
			<Image
				src="/post_images/HVAC System and Repair.jpg"
				width={1200}
				height={600}
				alt="hehe"
			/>
			<p className="text-[16px] text-black/75 font-normal text-start pt-3">
				Your HVAC system is essential for maintaining comfort in your
				home or business. Whether you need routine maintenance,
				emergency repairs, or a full system replacement, Air It Cool has
				you covered! Contact us today for expert HVAC repair,
				maintenance, and installation services to keep your system
				running at its best!
			</p>
		</div>
	);
};

export default test;
