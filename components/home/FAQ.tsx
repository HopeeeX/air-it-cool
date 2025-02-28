import React from "react";

const faqs = [
	{
		question: "What services does Air It Cool provide?",
		answer: "Air It Cool specializes in HVAC repair, maintenance, and installation. We service air conditioners, heaters, furnaces, ventilation systems, and other climate control units for residential and commercial properties.",
	},
	{
		question: "Do you offer emergency HVAC repair services?",
		answer: "Yes! We offer 24/7 emergency HVAC repair services to ensure your heating or cooling system is back up and running as soon as possible.",
	},
	{
		question: "What areas do you serve?",
		answer: "We serve Hillsborough County and Valrico, Florida. If you’re unsure, give us a call to check if we service your location.",
	},
	{
		question: "How do I schedule an HVAC service?",
		answer: "You can schedule a repair by calling us or booking online through our website.",
	},
	{
		question: "How can I improve my HVAC system's efficiency?",
		answer: "Regular maintenance, cleaning or replacing air filters, sealing duct leaks, and using a programmable thermostat can help improve efficiency and reduce energy costs.",
	},
];

const FAQ = () => {
	return (
		<div className="flex justify-center p-4 pt-6 pb-24">
			<div className="max-w-2xl w-full">
				<h2 className="text-[40px] font-bold text-center mb-6 text-black">
					Frequently Asked Questions
				</h2>
				{faqs.map((faq, index) => (
					<details
						key={index}
						className="collapse collapse-arrow bg-[#2478C0] text-white mb-2 rounded-lg"
					>
						<summary className="collapse-title text-lg font-semibold">
							{faq.question}
						</summary>
						<div className="collapse-content p-4 bg-[#1f6aad] rounded-b-lg">
							<p>{faq.answer}</p>
						</div>
					</details>
				))}
			</div>
		</div>
	);
};

export default FAQ;
