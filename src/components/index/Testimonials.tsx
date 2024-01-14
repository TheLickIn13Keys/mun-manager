import React from "react";
import Flickity from "react-flickity-component";
import "../../css/flickity.css";

function Testimonial({
	name,
	university,
	content,
}: {
	name: string;
	university: string;
	content: React.ReactNode;
}) {
	// return (
	// 	<>
	// 		<h1>{name}</h1>
	// 		<h3>{university}</h3>
	// 		<p>{content}</p>
	// 	</>
	// );
	return (
		<section className="w-full py-8 overflow-hidden md:py-12 lg:py-18">
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<svg
					className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
					width={404}
					height={404}
					fill="none"
					viewBox="0 0 404 404"
					role="img"
					aria-labelledby="svg-workcation"
				>
					{/* <defs>
						<pattern
							id="ad119f34-7694-4c31-947f-5c9d249b21f3"
							x={0}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect
								x={0}
								y={0}
								width={4}
								height={4}
								className="text-gray-200"
								fill="currentColor"
							/>
						</pattern>
					</defs> */}
					<rect
						width={404}
						height={404}
						fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
					/>
				</svg>
				<div className="relative">
					<blockquote className="mt-10">
						<div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-white">
							<p>{content}</p>
						</div>
						<footer className="mt-8">
							<div className="md:flex md:items-center md:justify-center">
								<div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
									<div className="text-base font-medium text-white">
										{name}
									</div>
									<svg
										className="hidden md:block mx-1 h-5 w-5 text-blue-600"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M11 0h3L9 20H6l5-20z" />
									</svg>
									<div className="text-base font-medium text-gray-300">
										{university}
									</div>{" "}
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</section>
	);
}
export default function TestimonialsSection() {
	return (
		<div className={"bg-blue-800 pb-16"}>
			<Flickity
				className={"carousel"} // default ''
				elementType={"div"} // default 'div'
				options={{ wrapAround: true }} // takes flickity options {}
				disableImagesLoaded={false} // default false
				reloadOnUpdate // default false
				static // default false
			>
				<Testimonial
					name={"Anish Kataria"}
					university={"Princeton"}
					content={
						<>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
							molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
							numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
							optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
							obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
							nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
							tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
							quia. Quo neque error repudiandae fuga?
						</>
					}
				/>
				<Testimonial
					name={"Avi Ahuja"}
					university={"Oregon"}
					content={
						<>
							bro i miss writing position papers
						</>
					}
				/>
				<Testimonial
					name={"Katie Cheng"}
					university={"Stanford"}
					content={
						<>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
							molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
							numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
							optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
							obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
							nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
							tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
							quia. Quo neque error repudiandae fuga?
						</>
					}
				/>
			</Flickity>
		</div>
	);
}
