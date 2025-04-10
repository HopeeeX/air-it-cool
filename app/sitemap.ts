import { MetadataRoute } from "next";
import posts from "@/posts/index.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const blogSitemap = posts.map((post) => {
		return {
			url: `https://airitcool.com/blog/${post.slug}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		};
	});

	const defaultPages: any[] = [
		{
			url: "https://airitcool.com",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
		{
			url: "https://airitcool.com/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: "https://airitcool.com/contact",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: "https://airitcool.com/services",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: "https://airitcool.com/blog",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		...blogSitemap
	];

	return defaultPages;
}
