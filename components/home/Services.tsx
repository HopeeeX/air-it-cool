import React from "react";
import Image from "next/image";

const Services = () => {
	return (
		<div className="flex flex-col justify-center items-center py-10 mb-28">
			<h1 className="text-black font-extrabold text-[2.5rem] ">
				Our Services
			</h1>

			<div className="flex flex-row gap-8">
				<div className="flex flex-col justify-center items-center border border-1 rounded-md shadow-md py-8 px-6 mt-10">
					<Image
						src="/aircon.png"
						alt="aircon"
						width={64}
						height={64}
					/>
					<h2 className="mt-4 text-[28px] text-[#0d2340] font-bold">
						Air Conditioning
					</h2>
					<p className="mt-2 w-[500px] text-[18px] text-[#0d2340] text-center font-medium">
						Our highly trained technicians repair all AC brands,
						fast and efficiently.
					</p>
					{/* <button className="mt-4 bg-blue-500 text-white text-[1.125rem] px-7 py-4 rounded-lg font-semibold hover:bg-blue-600">
						See Our Services
					</button> */}
				</div>

				<div className="flex flex-col justify-center items-center border border-1 rounded-md shadow-md py-8 px-6 mt-10">
					<Image src="/hvac.png" alt="hvac" width={64} height={64} />
					<h2 className="mt-4 text-[28px] text-[#0d2340] font-bold">
						HVAC System
					</h2>
					<p className="mt-2 w-[500px] text-[18px] text-[#0d2340] text-center font-medium">
						From minor fixes to full system installations, we’ve got
						you covered.
					</p>
					{/* <button className="mt-4 bg-blue-500 text-white text-[1.125rem] px-7 py-4 rounded-lg font-semibold hover:bg-blue-600">
						See Our Services
					</button> */}
				</div>
			</div>

			<div className="flex flex-row gap-8">
				<div className="flex flex-col justify-center items-center border border-1 rounded-md shadow-md py-8 px-6 mt-10">
					<Image src="/duct.png" alt="duct" width={64} height={64} />
					<h2 className="mt-4 text-[28px] text-[#0d2340] font-bold">
						Air Duct Cleaning
					</h2>
					<p className="mt-2 w-[500px] text-[18px] text-[#0d2340] text-center font-medium">
						Improve your indoor air quality and HVAC efficiency with
						our professional duct cleaning services.
					</p>
					{/* <button className="mt-4 bg-blue-500 text-white text-[1.125rem] px-7 py-4 rounded-lg font-semibold hover:bg-blue-600">
						See Our Services
					</button> */}
				</div>

				<div className="flex flex-col justify-center items-center border border-1 rounded-md shadow-md py-8 px-6 mt-10">
					<Image
						src="/calendar.png"
						alt="calendar"
						width={64}
						height={64}
					/>
					<h2 className="mt-4 text-[28px] text-[#0d2340] font-bold">
						Emergency Services
					</h2>
					<p className="mt-2 w-[500px] text-[18px] text-[#0d2340] text-center font-medium">
						Available 24/7 – We’re there when you need us most.
					</p>
					{/* <button className="mt-4 bg-blue-500 text-white text-[1.125rem] px-7 py-4 rounded-lg font-semibold hover:bg-blue-600">
						See Our Services
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default Services;
