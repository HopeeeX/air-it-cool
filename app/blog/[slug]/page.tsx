import posts from "@/posts/index.json";
import { notFound } from "next/navigation";

export default async function PostPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	const post = posts.find((post) => post.slug === slug);

	if (!post) return notFound();

	// Dynamically import the TSX component
	const { default: PostContent } = await import(
		`@/posts/tsx/${slug}.tsx`
	).catch(() => null);

	if (!PostContent) return notFound();

	return (
		<div className="flex justify-center items-center">
			<div className="p-4 w-3/5">
				<h1 className="text-2xl font-bold">{post.title}</h1>
				<p>By {post.author}</p>
				<div className="mt-4 p-4 rounded-md">
					<PostContent />
				</div>
			</div>
		</div>
	);
}
