"use client"

import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";

export default function HeaderV2({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const drawerToggle = useRef<HTMLInputElement | null>(null); // Ref to the checkbox

	// Toggle the drawer when Link is clicked
	const handleLinkClick = () => {
		if (drawerToggle.current) {
			drawerToggle.current.checked = false; // Uncheck the checkbox (close the drawer)
		}
	};

	return (
		<div className="!drawer drawer-end">
			<div className="drawer-content flex flex-col justify-center">
				{/* Navbar */}
				<div className="navbar w-full flex justify-between px-8 bg-white py-8">
					<div>
						<Image
							src={"/logo.png"}
							alt="logo"
							width={150}
							height={70}
						/>
					</div>
					<nav className="hidden md:flex gap-6 text-black font-medium">
						<Link href="/" onClick={handleLinkClick}>
							Home
						</Link>
						<Link href="/services" onClick={handleLinkClick}>
							Services
						</Link>
						{/* <Link href="/blog">Blog</Link> */}
						<Link href="/about" onClick={handleLinkClick}>
							About Us
						</Link>
						<Link href="/contact" onClick={handleLinkClick}>
							Contact Us
						</Link>
					</nav>
					<div>
						<button className="bg-[#2478C0] text-white px-5 py-4 rounded-md font-semibold hidden lg:flex">
							Call (850) - 258 - 8144
						</button>
					</div>
					<div className="flex-none md:hidden">
						<label
							htmlFor="my-drawer-3"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block h-6 w-6 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
				</div>
				{children}
			</div>
			<input
				id="my-drawer-3"
				type="checkbox"
				className="drawer-toggle"
				ref={drawerToggle} // Attach the ref to the checkbox
			/>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-3"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu bg-white min-h-full w-80 p-4 gap-4">
					<li>
						<Link href="/" onClick={handleLinkClick}>
							Home
						</Link>
					</li>
					<li>
						<Link href="/services" onClick={handleLinkClick}>
							Services
						</Link>
					</li>
					{/* <li><Link href="/blog">Blog</Link></li> */}
					<li>
						<Link href="/about" onClick={handleLinkClick}>
							About Us
						</Link>
					</li>
					<li>
						<Link href="/contact" onClick={handleLinkClick}>
							Contact Us
						</Link>
					</li>
					<li>
						<a href="tel:+18136812477" className="bg-[#2478C0] text-white px-5 py-4 rounded-md font-semibold">
							Call (813) - 681 - 2477
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
