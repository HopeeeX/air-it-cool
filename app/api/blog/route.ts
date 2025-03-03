import ReactDOMServer from "react-dom/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");

		if (!slug) {
			return new Response(JSON.stringify({ error: "Slug is required" }), {
				status: 400,
			});
		}

		// Import JSON metadata
		const jsonData = await import(`@/posts/json/${slug}.json`).then(
			(module) => module.default
		);

		// Dynamically import the corresponding TSX component
		const { default: Component } = await import(`@/posts/tsx/${slug}.tsx`).catch(() => {
			throw new Error("Component not found");
		});

		// Render the TSX component to an HTML string
		const contentHtml = ReactDOMServer.renderToString(Component);

		// Include the rendered HTML in the response
		const responseData = { ...jsonData, content: contentHtml };

		return new Response(JSON.stringify(responseData), {
			headers: { "Content-Type": "application/json" },
			status: 200,
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: "File not found or invalid slug" }),
			{ status: 404 }
		);
	}
}
