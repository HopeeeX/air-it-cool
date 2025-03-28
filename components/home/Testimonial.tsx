import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import Link from "next/link";

const reviews = [
	{
		name: "Rose Armand “PinkRose” de Brign",
		body: "Excellent service! Frank was very friendly, very thorough and explained everything he was doing. After he finished he cleaned up!! I can't tell you how many times vendors come out and do a job and never clean up their mess. Thank you Frank vendors need more people like you who go above and beyond!",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjXrO8Oorq9v2aOnK1OO9r-aH2rEe6Pkbbff3tClNUw2nUT8viqr=w36-h36-p-rp-mo-ba4-br100",
		link: "https://maps.app.goo.gl/TBLqPwmcgox5GeBp9",
	},
	{
		name: "Justin Young",
		body: "Phenomenal company! Had Yandro and team install a minisplit A/C/heat pump combo in my gym in my outdoor building! Quick, courteous,  cleaned up after themselves and the price was really good! Would highly recommend for your A/C needs!",
		img: "https://lh3.googleusercontent.com/a/ACg8ocIQ_g0GqQHk4IH0M4I0xWVcqFEjsoobD4sVT_8mAmGkDNDQ4g=w36-h36-p-rp-mo-ba3-br100",
		link: "https://maps.app.goo.gl/49eJ8x87x1X2Ess38",
	},
	{
		name: "Michael Hoover",
		body: "We contracted Air It Cool to replace our aging outdoor unit but ended up replacing both the air handler as well as the outside unit along with a new digital blue tooth thermostat. The crew arrived on time. They were all polite, quiet, friendly and most importantly they were very good at their job. Both old units and thermostat were removed and everything replaced in 1 day and the owner helped me figure out the new thermostat. They did everything they said they would, on time and at a price I was very impressed with. I highly recommend Air It Cool for any HVAC needs you may have. I know I won’t hesitate to use them again.",
		img: "https://lh3.googleusercontent.com/a/ACg8ocKqweIdOquMXPGMasxhaSVJ4DIrPqZ1B9DYlD0BXPlR3dJELw=w36-h36-p-rp-mo-br100",
		link: "https://maps.app.goo.gl/XhyWACpBV8V2sDMy5",
	},
	{
		name: "Mary Ayala",
		body: "When our air conditioner was not working They were able to provide a solution. The technician was very knowledgeable. They are very  responsible and the price was affordable and got it fixed very well. They cleaned up after and gave us warranty. We’re very happy it’s been around 9 years and the air is still working very well. We highly recommend  this company",
		img: "https://lh3.googleusercontent.com/a/ACg8ocLpvi5RHfuV7MhmOuDqRhP_N_MaAxQH_lGv9yDMZy9y9GB_LQ=w36-h36-p-rp-mo-br100",
		link: "https://maps.app.goo.gl/CXcocq2KxRF9JYqR8",
	},
	{
		name: "Cris S",
		body: "Air It Cool was there for me when no one else was. Florida heat isn’t for the weak. When no one else picked up on a Saturday night they were there within 30mins. I was impressed and thankful for the professionalism and amazing prices. Thank you guys for the amazing job and for not taking advantage of us during a tough time. You’ve earned a customer for life!!",
		img: "https://lh3.googleusercontent.com/a/ACg8ocKKnlrkWciOiyArotIul2rmMYzX8x1DrRGhsFbj1K_bWOEZLg=w36-h36-p-rp-mo-br100",
		link: "https://maps.app.goo.gl/HcjyGP52MYJz7XoQ9",
	},
	{
		name: "Daren Pippio",
		body: "Yandro and Air It Cool are my #1 go to for any A/C needs! I have been working with Yandro for 10 years, and he is always reliable, responsive and helpful. I have 3 units that he has replaced and serviced over the years. No issues and very reasonable.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjVZI3cQlDEdaFa9xkuCQFQx4PM6g1doclKK0ihn82clisxNXzpXtQ=w36-h36-p-rp-mo-ba3-br100",
		link: "https://maps.app.goo.gl/qgXJLsiX6gwGjXD4A",
	},
	{
		name: "Todd Frankman",
		body: "On Fourth of July, our air conditioner went out. I called several companies and the guys from Air it cool came out. Thankfully, it was not an entire AC system. They had the parts and we were up and running within a few hours.  Very highly recommended!",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjX1Zbg48t5bir5rCOgrsP2z3N8x7hZfJbvGDE9PgtQ78eqvsjvNNg=w36-h36-p-rp-mo-ba3-br100",
		link: "https://maps.app.goo.gl/brFiqS216tz9iRpMA",
	},
	{
		name: "Drew Bailey",
		body: "Awesome service. They came next day and did not disappoint. Walked us thru what they were doing and gave us some options if needed that wasn't as high as some other companies.  Highly recommend this company for any A/C service needs.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjU9dDx68YohGXwBRTeUIp5UcQVBp9RZfWAmlY_N21G51rQezzPJ=w36-h36-p-rp-mo-br100",
		link: "https://maps.app.goo.gl/vT5YnZ69uTRbg5b58",
	},
	{
		name: "Pedro Valle",
		body: "Amazing customer service, very professional, and great communication throughout the process. Always on time and top notch work. Highly recommend his A/C company. My first choice on all heating a cooling needs.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjVHPcNBKdSYGfcdeUgGYBB2ov-RJ0De9bd9HjOX7Pi4_yRGzz2orQ=w36-h36-p-rp-mo-br100",
		link: "https://maps.app.goo.gl/s6H61FGJ8pY5EbCVA",
	},
	{
		name: "Matt & Angel Wenrich",
		body: "Yandro and his team have been our GoTo A/C company for over 10+ years!! They are quick to respond and have always corrected any issues we may have had!! Highly recommended!!",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjVVr5F54xL3hn4GmYJt6x8IlwHwE9NIlo9bRFTI8e-L-WcVdepB=w36-h36-p-rp-mo-ba3-br100",
		link: "https://maps.app.goo.gl/5xLpvNKNouyKVDL68",
	},
	{
		name: "Dania Q",
		body: "I had my AC unit replaced and from start to finish I was very impressed, Great price and the techs were very thorough, each one had a specific job and they did it and cleaned up after themselves. I was very impressed with their work.",
		img: "https://lh3.googleusercontent.com/a/ACg8ocI-o0OTqyP8NOPqw6IBsGnT3j5DPq2Iq8hpCj-EQj8htouTeg=w36-h36-p-rp-mo-br100",
		link: "https://maps.app.goo.gl/QSzwasbEfHdpsLcG9",
	},
	{
		name: "Robert cooper",
		body: "They came out same day and got my AC back up and running better than it has since I moved in… reasonably priced and professional. Would definitely use again",
		img: "https://lh3.googleusercontent.com/a/ACg8ocKrwd6O_bYnJ8Wc8zw2FoEUsbcy8P-6HEP6cL7P24Ic1b7ODg=w36-h36-p-rp-mo-ba3-br100",
		link: "https://maps.app.goo.gl/AQ9KZ9FZmyBhpqpQA",
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
