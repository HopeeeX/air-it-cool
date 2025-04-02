import type { Metadata } from "next";
import posts from "@/posts/index.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PostFooter from "@/components/PostFooter";
import PostTemplate from "@/components/PostTemplate";

type Props = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = posts.find((p) => p.slug === slug);
	if (!post) return notFound();
	return {
		title: `${post.title} | Air It Cool`,
		authors: [{ name: post.author || "Air It Cool" }],
		// description: post.description,
		// keywords: post.keywords || [],
		// openGraph: {
		// 	title: ${post.title} | Air It Cool,
		// 	description: post.description,
		// 	type: "article",
		// 	url: https://airitcool.com/blog/${post.slug},
		// 	publishedTime: post.created_at,
		// 	modifiedTime: post.modified_at,
		// authors: ["https://airitcool.com/about"],
		// tags: post.categories || [],
		// images: [
		// 	{
		// 		url:
		// 			post.image ||
		// 			"https://airitcool.com/assets/default-thumbnail.png",
		// 		width: 1200,
		// 		height: 630,
		// 		alt: post.title,
		// 		type: "image/png",
		// 	},
		// ],
		// },
		// twitter: {
		// 	card: "summary_large_image",
		// 	site: "@AirItCool",
		// 	creator: "@AirItCool",
		// 	title: ${post.title} | Air It Cool,
		// 	description: post.description,
		// 	images: [
		// 		{
		// 			url:
		// 				post.image ||
		// 				"https://airitcool.com/assets/default-thumbnail.png",
		// 			width: 1200,
		// 			height: 630,
		// 			alt: post.title,
		// 		},
		// 	],
		// },
		alternates: {
			canonical: `https://airitcool.com/blog/${post.slug}`,
		},
	};
}

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const post = posts.find((p) => p.slug === slug);
	if (!post) return notFound();

	return (
		<div className="flex justify-center items-center py-20 bg-slate-100">
			<div className="w-full max-w-5xl shadow-lg">
				<Image
					src={post.thumbnail}
					width={1200}
					height={600}
					alt="Post Thumbnail"
				/>
				<div className="flex flex-col p-10">
					<h1 className="text-3xl font-bold">{post.title}</h1>
					<p className="text-blue-600">By {post.author}</p>
					<div className="mt-4 flex flex-col">
						<PostTemplate content={post.content} />
					</div>
				</div>
			</div>
		</div>
	);
}
