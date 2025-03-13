import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
	];

	return defaultPages;
}
