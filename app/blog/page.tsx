import posts from "@/posts/index.json";
import Link from "next/link";

const page = () => {
	console.log(posts);
	return (
		<div className="flex justify-center items-center">
			<div className="grid grid-cols-4 gap-5 w-3/5">
				{posts.map((post) => (
					<div key={post.slug}>
						<Link href={`/blog/${post.slug}`}>{post.slug}</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
