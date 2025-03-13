import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HeaderV2({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="!drawer drawer-end">
			<div className="drawer-content flex flex-col justify-center">
				{/* Navbar */}
				<div className="navbar w-full max-w-6xl flex justify-between px-5 bg-white py-8">
					<div>
						<Image
							src={"/logo.png"}
							alt="logo"
							width={150}
							height={70}
						/>
					</div>
					<nav className="hidden md:flex gap-6 text-black font-medium">
						<Link href="/">Home</Link>
						<Link href="/services">Services</Link>
						{/* <Link href="/blog">Blog</Link> */}
						<Link href="/about">About Us</Link>
						<Link href="/contact">Contact Us</Link>
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
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-3"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu bg-white min-h-full w-80 p-4 gap-4">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/services">Services</Link>
					</li>
					{/* <li><Link href="/blog">Blog</Link></li> */}
					<li>
						<Link href="/about">About Us</Link>
					</li>
					<li>
						<Link href="/contact">Contact Us</Link>
					</li>
                    <li>
                    <button className="bg-[#2478C0] text-white px-5 py-4 rounded-md font-semibold">
							Call (850) - 258 - 8144
						</button>
                    </li>
				</ul>
                
			</div>
		</div>
	);
}
