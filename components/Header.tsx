import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="w-full flex justify-center bg-white py-8">
			<div className="w-full max-w-6xl flex justify-between items-center px-5">
				{/* Logo Section */}
				<div>
					<Image
                        src={"/logo.png"}
                        alt="logo"
						width={150}
						height={70}
                    />
				</div>

				{/* Navigation Menu */}
				<nav className="hidden md:flex gap-6 text-black font-medium">
					<Link href="/">Home</Link>
					<Link href="/services">Services</Link>
					{/* <Link href="/blog">Blog</Link> */}
					<Link href="/about">About Us</Link>
					<Link href="/contact">Contact Us</Link>
				</nav>

				{/* Call Button */}
				<div>
					<button className="bg-[#2478C0] text-white px-5 py-4 rounded-md font-semibold hidden lg:flex">
						Call (850) - 258 - 8144
					</button>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button className="text-black text-2xl">☰</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
