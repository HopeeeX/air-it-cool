import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
	{
		name: "France Zisco",
		body:
			"Very Professional, swift and easy transaction. My air conditioning is back again working. They offer one of the cheapest but reliable cleaning service within Valenzuela and nearby area. Would recommend them obviously.",
		img:
			"https://lh3.googleusercontent.com/a-/ALV-UjVGpWQ1iFja2gsGrpefJssVfr9TpVszmeUzNl42A0K0PDYlU3oG=s40-c-rp-mo-br100",
	},
	{
		name: "Chichay",
		body:
			"Recommended to try their services as they have professional people and guaranteed service.",
		img:
			"https://lh3.googleusercontent.com/a-/ALV-UjUSibhB4-HDaQvn4ap7ok65o2AXzN2Guuw_sAZnALWrILmnPXhK8A=s40-c-rp-mo-br100",
	},
	{
		name: "janice jhing bernabe",
		body:
			"Super legit highly recommended! I thought at first the ac was badly damaged...it wasn't...they only cleaned and cleaned it back when it was super cold! I didn't spend a lot...thanks to the kind techs ..keep it up!",
		img:
			"https://lh3.googleusercontent.com/a/ACg8ocI4q_36yBaW3aO1BEY5_BLG4MoKL2nqOVTto6CiM3oe6Rc88n4=s40-c-rp-mo-br100",
	},
	{
		name: "johnpaul salamat",
		body: "good cleaning quality",
		img:
			"https://lh3.googleusercontent.com/a-/ALV-UjVgRlK92hs6qjpzsAgXaH0VqsrVJn28MAvUHkwmaQtJyc25IkBQ=s40-c-rp-mo-br100",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	body,
}: {
	img: string;
	name: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img
					className="rounded-full"
					width="32"
					height="32"
					alt=""
					src={img}
				/>
				
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<div className="rating rating-xs cursor-default">
					<input
						type="radio"
						disabled
						name="rating-5"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						disabled
						name="rating-5"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						disabled
						name="rating-5"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						disabled
						name="rating-5"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						disabled
						name="rating-5"
						className="mask mask-star-2 bg-orange-400"
						defaultChecked
					/>
				</div>
				</div>
			</div>
			<blockquote className="mt-2 text-sm line-clamp-3">
				{body}
			</blockquote>
		</figure>
	);
};

const Testimonial = () => {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
			<div>
				<h1 className="text-[40px] font-bold text-center mb-8 text-black">
					{" "}
					What Our Customer Says
				</h1>
			</div>
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
