"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface PostData {
    post_slug: string;
    title: string;
    author: string;
    content: string;
}

export default function SlugPage() {
    const { slug } = useParams();
    const [data, setData] = useState<PostData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        const fetchData = async () => {
            try {
                const res = await fetch(`/api/data?slug=${slug}`);
                if (!res.ok) throw new Error("Failed to fetch data");

                const json: PostData = await res.json();
                setData(json);
            } catch (err) {
                setError("Error fetching data");
            }
        };

        fetchData();
    }, [slug]);

    if (error) return <div className="text-red-500">{error}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-gray-600">By {data.author}</p>
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
                {/* Insert pre-rendered HTML content */}
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        </div>
    );
}
