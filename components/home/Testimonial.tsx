import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import Link from "next/link";

const reviews = [
	{
		name: "France Zisco",
		body: "Very Professional, swift and easy transaction. My air conditioning is back again working. They offer one of the cheapest but reliable cleaning service within Valenzuela and nearby area. Would recommend them obviously.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjVGpWQ1iFja2gsGrpefJssVfr9TpVszmeUzNl42A0K0PDYlU3oG=s40-c-rp-mo-br100",
		link: "https://g.co/kgs/xVScn5r",
	},
	{
		name: "Chichay",
		body: "Recommended to try their services as they have professional people and guaranteed service.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjUSibhB4-HDaQvn4ap7ok65o2AXzN2Guuw_sAZnALWrILmnPXhK8A=s40-c-rp-mo-br100",
		link: "https://g.co/kgs/rJCYhkH",
	},
	{
		name: "Janice Jhing Bernabe",
		body: "Super legit highly recommended! I thought at first the AC was badly damaged...it wasn't...they only cleaned and cleaned it back when it was super cold! I didn't spend a lot...thanks to the kind techs. Keep it up!",
		img: "https://lh3.googleusercontent.com/a/ACg8ocI4q_36yBaW3aO1BEY5_BLG4MoKL2nqOVTto6CiM3oe6Rc88n4=s40-c-rp-mo-br100",
		link: "https://g.co/kgs/5VspUmW",
	},
	{
		name: "John Paul Salamat",
		body: "Good cleaning quality",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjVgRlK92hs6qjpzsAgXaH0VqsrVJn28MAvUHkwmaQtJyc25IkBQ=s40-c-rp-mo-br100",
		link: "https://g.co/kgs/hJaNM3f",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, body, link }: { img: string; name: string; body: string; link: string }) => {
	return (
		<Link href={link} target="_blank" rel="noopener noreferrer">
			<figure
				className={cn(
					"relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
					"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
					"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
				)}
			>
				<div className="flex flex-row items-center gap-2">
					<Image className="rounded-full" width="32" height="32" alt={`${name}'s review`} src={img} />

					<div className="flex flex-col">
						<figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
						<div className="rating rating-xs cursor-default">
							{Array.from({ length: 5 }).map((_, index) => (
								<input
									key={index}
									type="radio"
									disabled
									name={`rating-${name.replace(/\s+/g, "-").toLowerCase()}`}
									className="mask mask-star-2 bg-orange-400"
									defaultChecked={index === 4}
								/>
							))}
						</div>
					</div>
				</div>
				<blockquote className="mt-2 text-sm line-clamp-3">{body}</blockquote>
			</figure>
		</Link>
	);
};

const Testimonial = () => {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
			<h1 className="text-3xl font-bold text-center mb-8 text-black">What Our Customers Say</h1>

			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>

			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
		</div>
	);
};

export default Testimonial;
