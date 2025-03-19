import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import HeaderV2 from "@/components/HeaderV2";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#ffffff",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://airitcool.com"),
	openGraph: {
		siteName: "Air It Cool",
		type: "website",
		locale: "en_US",
	},
	robots: {
		index: true,
		follow: true,
		"max-image-preview": "large",
		"max-snippet": -1,
		"max-video-preview": -1,
		googleBot: "index, follow",
	},
	applicationName: "Air It Cool",
	appleWebApp: {
		title: "Air It Cool",
		statusBarStyle: "default",
		capable: true,
	},
	// verification: {
	// 	google: "YOUR_DATA",
	// 	yandex: ["YOUR_DATA"],
	// 	other: {
	// 		"msvalidate.01": ["YOUR_DATA"],
	// 		"facebook-domain-verification": ["YOUR_DATA"],
	// 	},
	// },
	// icons: {
	// 	icon: [
	// 		{
	// 			url: "/favicon.ico",
	// 			type: "image/x-icon",
	// 		},
	// 		{
	// 			url: "/favicon-16x16.png",
	// 			sizes: "16x16",
	// 			type: "image/png",
	// 		},
	// 		// add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
	// 	],
	// 	shortcut: [
	// 		{
	// 			url: "/favicon.ico",
	// 			type: "image/x-icon",
	// 		},
	// 	],
	// 	apple: [
	// 		{
	// 			url: "/apple-icon-57x57.png",
	// 			sizes: "57x57",
	// 			type: "image/png",
	// 		},
	// 		{
	// 			url: "/apple-icon-60x60.png",
	// 			sizes: "60x60",
	// 			type: "image/png",
	// 		},
	// 		// add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
	// 	],
	// },
};

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"]
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className={`${poppins.className} scroll-smooth`}>
			<body className={`antialiased flex flex-col`}>
				{/* <Header />
				{children} */}
				<HeaderV2>{children}</HeaderV2>
				<Footer/>
			</body>
		</html>
	);
}
