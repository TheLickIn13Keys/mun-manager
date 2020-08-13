import React from "react";
import About from "../components/index/About";
import CTA from "../components/index/CTA";
import Hero from "../components/index/Hero";
import Stats from "../components/index/Stats";
import { Layout } from "../components/layout";

function IndexPage(): React.ReactElement {
	const aboutRef = React.useRef(null);

	return (
		<Layout title={"Home"} navbarShadow="always">
			<Hero aboutRef={aboutRef} />
			<About aboutRef={aboutRef} />
			<Stats />
			<CTA />
		</Layout>
	);
}

export default IndexPage;
