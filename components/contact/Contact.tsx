"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		location: "",
		service: "Air Conditioning Repair",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/smtp", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Failed to submit form");
			}
			
			setFormData({ fullName: "", email: "", location: "", service: "Air Conditioning Repair", message: "" });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<div className="relative w-full flex items-center justify-center text-center py-20">
				{/* Background Image */}
				<div className="absolute inset-0 w-full">
					<Image src="/ContactSection_Banner.jpg" alt="cta" layout="fill" objectFit="cover" />
				</div>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/75"></div>

				{/* Content */}
				<div className="relative w-full max-w-6xl px-5 text-white flex flex-row items-center justify-between">
					<div className="flex flex-col min-[1246px]:flex-row min-[1246px]:justify-between gap-14 items-start py-14">
						<div className="flex flex-col justify-center items-center min-[1246px]:justify-start min-[1246px]:items-start">
							<h1 className="text-3xl text-white font-black min-[1246px]:w-[500px] w-fit min-[1246px]:text-start text-start">
								Contact Us For Your HVAC Repair!
							</h1>
							<p className="min-[1246px]:w-[550px] w-4/5 text-[18px] text-start text-white/95 font-normal mt-5">
								Fill out our quick and easy contact form below, and one of our friendly representatives will get back to you as soon as possible.
							</p>
							<p className="min-[1246px]:w-[550px] w-4/5 text-[18px] text-start text-white/95 font-normal mt-5">
								Don’t let a broken appliance disrupt your day. Reach out to Air It Cool Air Conditioning & Heating now and let us get your HVAC system back in top shape!
							</p>
							<Link href="/about" className="mt-10 bg-blue-500 text-white text-[18px] px-7 py-5 rounded-lg font-semibold hover:bg-blue-600">
								Learn More About Us
							</Link>
						</div>

						<form className="bg-white/30 p-4 rounded-md flex flex-col justify-center items-start w-full" onSubmit={handleSubmit}>
							<label className="form-control w-full">
								<div className="label">
									<span className="label-text text-white">Full Name</span>
								</div>
								<input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Input full name" className="input bg-transparent border-1 border-white/80 min-[1246px]:w-[500px]" required />
							</label>

							<label className="form-control mt-1 w-full">
								<div className="label">
									<span className="label-text text-white">Email</span>
								</div>
								<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Input email address" className="input bg-transparent border-1 border-white/80 min-[1246px]:w-[500px]" required />
							</label>

							<label className="form-control mt-1 w-full">
								<div className="label">
									<span className="label-text text-white">Location Address</span>
								</div>
								<input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Input location address" className="input bg-transparent border-1 border-white/80 min-[1246px]:w-[500px]" required />
							</label>

							<label className="mt-4 w-full">
								<div className="label">
									<span className="label-text text-white">Type of Service</span>
								</div>
								<select name="service" value={formData.service} onChange={handleChange} className="select bg-transparent border-1 border-white/80 w-full min-[1246px]:w-[500px]">
									<option>Air Conditioning Repair</option>
									<option>HVAC Repair & Maintenance</option>
									<option>Air Duct Cleaning Service</option>
								</select>
							</label>

							<label className="mt-4 w-full">
								<div className="label">
									<span className="label-text text-white">Message</span>
								</div>
								<textarea name="message" value={formData.message} onChange={handleChange} placeholder="Input your concern here..." className="textarea bg-transparent border-1 border-white/80 textarea-md w-full min-[1246px]:w-[500px]" required></textarea>
							</label>

							<button type="submit" className="mt-2 bg-blue-500 text-white text-[14px] p-3 rounded-lg font-medium hover:bg-blue-600 min-[1246px]:w-[500px] w-full">Submit Request</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
