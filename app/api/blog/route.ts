import posts from "@/posts/index.json";
import { NextResponse } from "next/server";
import ReactDOMServer from "react-dom/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");

		if (!slug) {
			return NextResponse.json({ error: "Slug is required" }, { status: 400 });
		}

		const curr_post = posts.find((post) => post.slug === slug);
		if (!curr_post) {
			return NextResponse.json({ error: "Post not found" }, { status: 404 });
		}

		// Dynamically import the TSX component
		const { default: PostComponent } = await import(`@/posts/tsx/${slug}.tsx`).catch(() => {
			throw new Error("Component not found");
		});

		// Convert the component to an HTML string
		const contentHtml = ReactDOMServer.renderToString(PostComponent);

		// Return JSON response with rendered HTML
		return NextResponse.json({ ...curr_post, content: contentHtml });
	} catch (error) {
		return NextResponse.json({ error: "File not found or invalid slug" }, { status: 404 });
	}
}
