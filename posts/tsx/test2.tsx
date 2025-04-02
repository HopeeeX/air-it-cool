import React from "react";
import Image from "next/image";

const test = () => {
	return (
		<div className="flex flex-col">
			<p className="text-[16px] text-black/75 font-normal text-start">
				Regular HVAC maintenance is crucial for keeping your system
				running efficiently and avoiding unexpected breakdowns. But how
				often should you schedule service? The general rule is at least
				twice a year—once in the spring for your air conditioning and
				once in the fall for your heating system.
			</p>
			<h2 className="text-2xl font-bold pt-3">
				Why Biannual HVAC Service Is Important
			</h2>
			<p className="text-[16px] text-black/75 font-normal text-start pt-3">
				Your HVAC system works year-round to keep your home comfortable.
				Over time, dust, dirt, and wear can affect its performance.
				Routine maintenance ensures:
				<br />
				<br />
				✅ Better Efficiency – A clean and well-maintained system runs
				smoothly, reducing energy consumption and lowering utility
				bills.
				<br />
				<br />
				✅ Fewer Breakdowns – Catching minor issues early prevents
				costly repairs or complete system failures.
				<br />
				<br />
				✅ Longer Lifespan – Regular servicing extends the life of your
				HVAC system, delaying expensive replacements.
				<br />
				<br />✅ Improved Air Quality – Clean filters and ducts reduce
				allergens, dust, and pollutants in your home.
			</p>
			<h2 className="text-2xl font-bold pt-3">
				What Happens During HVAC Maintenance?
			</h2>
			<p className="text-[16px] text-black/75 font-normal text-start pt-3">
				When you schedule a professional tune-up, an HVAC technician
				will:
				<br />
				🔹 Inspect and clean components – Coils, fans, and filters are
				checked and cleaned for optimal airflow.
				<br />
				🔹 Test system performance – Ensuring proper cooling and heating
				functions.
				<br />
				🔹 Check for refrigerant leaks – Low refrigerant levels can
				cause inefficient cooling.
				<br />
				🔹 Lubricate moving parts – Reduces wear and tear on key
				components.
				<br />
				🔹 Inspect thermostat settings – Ensuring accurate temperature
				control.
			</p>
			<h2 className="text-2xl font-bold pt-3">
				Additional Maintenance Tips
			</h2>
			<p className="text-[16px] text-black/75 font-normal text-start pt-3">
				Between professional services, you can maintain your HVAC system
				by:
				<br />
				✔ Changing air filters every 1–3 months
				<br />
				✔ Keeping outdoor units free from debris
				<br />
				✔ Checking vents for blockages
				<br />✔ Listening for unusual noises
			</p>
			<h2 className="text-2xl font-bold pt-3 pb-3">Conclusion</h2>
			<Image
				src="/post_images/HVAC_Repair.jpg"
				width={1200}
				height={600}
				alt="hehe"
			/>
			<p className="text-[16px] text-black/75 font-normal text-start pt-3">
				Routine HVAC maintenance is the key to comfort, efficiency, and
				longevity. Don’t wait for problems to arise—schedule your spring
				and fall tune-ups with Air It Cool today! Our experts ensure
				your system runs at peak performance all year round. Call us
				now!Your HVAC system is essential for maintaining comfort in
				your home or business. Whether you need routine maintenance,
				emergency repairs, or a full system replacement, Air It Cool has
				you covered! Contact us today for expert HVAC repair,
				maintenance, and installation services to keep your system
				running at its best!
			</p>
		</div>
	);
};

export default test;
