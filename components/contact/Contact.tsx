import React from "react";
import Image from "next/image";

const Contact = () => {
	return (
		<div>
			<div className="relative w-full flex items-center justify-center text-center py-20">
				{/* Background Image */}
				<div className="absolute inset-0 w-full">
					<Image
						src="/ContactSection_Banner.jpg"
						alt="cta"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/75"></div>

				{/* Content */}
				<div className="relative w-full max-w-6xl px-5 text-white flex flex-row items-center justify-between">
					<div className="flex flex-col min-[77.875rem]:flex-row min-[77.875rem]:justify-between gap-14 items-start py-14">
						<div className="flex flex-col justify-center items-center min-[77.875rem]:justify-start min-[77.875rem]:items-start">
							<h1 className="text-3xl text-white font-black min-[77.875rem]:w-[31.25rem] w-fit min-[77.875rem]:text-start text-start">
								Contact Us For Your HVAC Repair!
							</h1>
							<p className="min-[77.875rem]:w-[34.375rem] w-4/5 text-[1.125rem] text-start text-white/95 font-normal mt-5">
								Fill out our quick and easy contact form below,
								and one of our friendly representatives will get
								back to you as soon as possible.
							</p>
							<p className="min-[77.875rem]:w-[34.375rem] w-4/5 text-[1.125rem] text-start text-white/95 font-normal mt-5">
								Don’t let a broken appliance disrupt your day.
								Reach out to Air It Cool Air Conditioning &
								Heating now and let us get your HVAC system back
								in top shape!
							</p>
							<button className="mt-10 bg-blue-500 text-white text-[1.125rem] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600">
								Learn More About Us
							</button>
						</div>

						<div>Forms</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
