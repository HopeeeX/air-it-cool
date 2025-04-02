"use client";
import posts from "@/posts/index.json";
import Link from "next/link";
import Image from "next/image";

const page = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="relative w-full flex items-center justify-center text-center py-20">
				{/* Background Image */}
				<div className="absolute inset-0 w-full">
					<Image
						src="/About_Banner.jpg"
						alt="cta"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/75"></div>

				{/* Content */}
				<div className="relative w-full max-w-6xl px-5 text-white flex flex-col items-center justify-center">
					<h1 className="font-bold text-3xl">
						See Our Latest Blogs!
					</h1>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-5 w-3/5 py-10">
				{posts.map((post) => (
					<div key={post.slug} className="shadow-md">
						<Image
							src={post.thumbnail}
							width={500}
							height={400}
							alt="hehe"
						/>
						<div className="flex flex-col px-7 pb-5">
							<h1 className="text-[#2478c0] text-[20px] font-semibold pt-4 pb-3">
								<Link href={`/blog/${post.slug}`}>
									{post.title}
								</Link>
							</h1>
							<p className="text-[14px] text-black/75 font-normal text-start line-clamp-5">
								{post.description}
							</p>
							<Link
								href={`/blog/${post.slug}`}
								className="text-[#2478c0] font-semibold pt-4 pb-3 text-[16px]"
							>
								Read More...{" "}
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
