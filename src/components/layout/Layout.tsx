import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SEO from "./SEO";

export default function Layout({
	children,
	title,
	className,
	wrapperClassName,
	navbarScrolledClassName,
	navbarUnscrolledClassName,
	lightFooter,
	gray,
	navbarShadow,
}: {
	children: React.ReactNode | React.ReactNodeArray | Element[];
	/**
	 * A title for the page, to be displayed in the browser tab
	 */
	title: string;
	/**
	 * A list of space delimited classes to be added to the topmost div of the page (parent to the navbar and body).
	 */
	className?: string;
	/**
	 * A list of space delimited classes to be added to the content wrapper.
	 */
	wrapperClassName?: string;

	/**
	 * A list of space delimited classes to be added to the navbar when the page has not yet been scrolled (i.e. the shadow is not visible)
	 */
	navbarUnscrolledClassName?: string;

	/**
	 * A list of space delimited classes to be added to the navbar when the page has been scrolled (i.e. the shadow is visible)
	 */
	navbarScrolledClassName?: string;

	/**
	 * If provided, the footer will be rendered in its light theme
	 */
	lightFooter?: boolean;
	/**
	 * If provided, the page will be rendered with a gray background (for cards)
	 */
	gray?: boolean;
	/**
	 * Specify the shadow for the navbar.
	 */
	navbarShadow?: "always" | "scroll" | "never";
}): React.ReactElement {
	return (
		<div
			className={
				"flex flex-col min-h-screen font-sans text-gray-900 " +
				(className || "") +
				" " +
				(gray ? "bg-gray-100" : "")
			}
		>
			<Navbar
				scrolledClassName={navbarScrolledClassName}
				unscrolledClassName={navbarUnscrolledClassName}
				shadow={navbarShadow}
			/>
			<SEO
				keywords={[
					"cuptertino",
					"model un",
					"mun",
					"monta vista",
					"club",
					"model united nations",
				]}
				title={title}
			/>
			<div className={wrapperClassName}>{children}</div>

			<Footer dark={!lightFooter} />
		</div>
	);
}