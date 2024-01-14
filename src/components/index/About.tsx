import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as Icons from "heroicons-react";
import React from "react";
export default function About({
	aboutRef,
	noTopDecorativeDots,
}: {
	aboutRef: React.Ref<HTMLDivElement>;
	noTopDecorativeDots?: boolean;
}): React.ReactElement {
	const socialsImage = useStaticQuery(graphql`
		query {
			socialsImage: file(relativePath: { eq: "socials.png" }) {
				childImageSharp {
					fixed(width: 490) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`).socialsImage.childImageSharp.fixed;
	return (
		<div
			className="py-16 overflow-hidden bg-gray-50 lg:py-24"
			ref={aboutRef}
		>
			<div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
				{noTopDecorativeDots === false && (
					<svg
						className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
						width="404"
						height="784"
						fill="none"
						viewBox="0 0 404 784"
					>
						<defs>
							<pattern
								id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width="404"
							height="784"
							fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
						/>
					</svg>
				)}

				<div className="relative">
					<h3 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-10">
						Dublin Down on Diplomacy
					</h3>
					<p className="max-w-2xl mx-auto mt-4 text-3xl leading-7 text-center text-gray-500">
						Model UN is awesome — here's why you should join us!
					</p>
				</div>

				{/* <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
					<div className="relative">
						<h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
							Build Lasting Skills
						</h4>
						<p className="mt-3 text-lg leading-7 text-gray-500">
							We promote a wide range of skills while debating
							world affairs and leading others toward global
							solutions and individual goals. Our club is built
							around real experiences tackling real-world issues.
							There's so much more to global politics than giving
							speeches or debating policies, with nuanced lessons
							from Model UN veterans and hands-on practice giving
							you the chance to grow.
						</p>

						<ul className="mt-10">
							<li>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
											<Icons.ChatAlt2
												className={"h-6 w-6"}
											/>
										</div>
									</div>
									<div className="ml-4">
										<h5 className="text-lg font-medium leading-6 text-gray-900">
											Develop Your Leadership Skills
										</h5>
										<p className="mt-2 text-base leading-6 text-gray-500">
											Working with others is a key part of
											Model UN. Our conferences offer a
											unique opportunity to practice
											communicating with others, honing
											your skills in negotiation, and
											leading your peers.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
											<Icons.LightBulb
												className={"h-6 w-6"}
											/>
										</div>
									</div>
									<div className="ml-4">
										<h5 className="text-lg font-medium leading-6 text-gray-900">
											Think on the Fly
										</h5>
										<p className="mt-2 text-base leading-6 text-gray-500">
											You might not think of Model UN as a
											fast-paced activity, but when
											participating, you always need to
											stay on your feet, adapt to new
											challenges, and solve problems in
											creative ways. But don’t worry, this
											isn’t as hard as it sounds! With a
											bit of practice in Model UN, you can
											learn to think on the fly and
											overcome any challenge—and it just
											might help you wing your next class
											presentation.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
											<Icons.GlobeAlt className="w-6 h-6" />
										</div>
									</div>
									<div className="ml-4">
										<h5 className="text-lg font-medium leading-6 text-gray-900">
											Learn About the World
										</h5>
										<p className="mt-2 text-base leading-6 text-gray-500">
											In Model UN, you’ll learn about some
											of the biggest issues our world
											faces—and have a chance to come up
											with real solutions to those issues.
											In the process, you’ll gain a better
											understanding of global perspectives
											by working with delegates from
											around the world.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div className="relative mt-10 -mx-4 lg:mt-0">
						<svg
							className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
							width="784"
							height="404"
							fill="none"
							viewBox="0 0 784 404"
						>
							<defs>
								<pattern
									id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width="784"
								height="404"
								fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
							/>
						</svg>
						<img
							className="relative mx-auto"
							width="490"
							src="https://www.un.org/en/ga/images/featured-image-index-new.jpg"
							alt=""
						/>
					</div>
				</div> */}

				<svg
					className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
					width="404"
					height="784"
					fill="none"
					viewBox="0 0 404 784"
				>
					<defs>
						<pattern
							id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect
								x="0"
								y="0"
								width="4"
								height="4"
								className="text-gray-200"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect
						width="404"
						height="784"
						fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
					/>
				</svg>

				<div className="relative mt-12 sm:mt-16 lg:mt-24">
					<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
						<div className="lg:col-start-2">
							<h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
								An Experince You'll Never Forget
							</h4>
							<p className="mt-3 text-lg leading-7 text-gray-500">
								Joining Dublin High's Model UN club means engaging in more than just debates. Here's what we offer:
							</p>

							<ul className="mt-10">
								<li>
									<div className="flex">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
												<Icons.UserGroup className="w-6 h-6" />
											</div>
										</div>
										<div className="ml-4">
											<h5 className="text-lg font-medium leading-6 text-gray-900">
												Building Friendships
											</h5>
											<p className="mt-2 text-base leading-6 text-gray-500">
											Beyond the formalities, we're a club that loves to have fun. 
											Whether it's sharing laughs over lunch at conferences or bunking with others at overnight trips, 
											our club is a place where you can make friends who share your interests. 
											These aren't just teammates; they become your Model UN family.
											</p>
										</div>
									</div>
								</li>
								<li className="mt-10">
									<div className="flex">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
												<Icons.LightBulb className="w-6 h-6" />
											</div>
										</div>
										<div className="ml-4">
											<h5 className="text-lg font-medium leading-6 text-gray-900">
												Learning Skills
											</h5>
											<p className="mt-2 text-base leading-6 text-gray-500">
											We focus on developing key life skills. 
											After attending regular meetings, you'll grow into a confident public speaker and 
											learn how to lead effectively. 
											Our activities and workshops are designed to be engaging and supportive, 
											helping you to find your voice and use it powerfully.
											</p>
										</div>
									</div>
								</li>
								<li className="mt-10">
									<div className="flex">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
												<Icons.GlobeAlt className="w-6 h-6" />
											</div>
										</div>
										<div className="ml-4">
											<h5 className="text-lg font-medium leading-6 text-gray-900">
												Understanding the World
											</h5>
											<p className="mt-2 text-base leading-6 text-gray-500">
												In MUN, you'll dive deep into global politics and current events. 
												We debate, discuss, and dissect international issues, helping you to become more politically aware and globally conscious. 
												It's not just about understanding the world; it's about preparing to make a positive impact in it.
											</p>
										</div>
									</div>
								</li>
								<li className="mt-10">
									<div className="flex">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
												<Icons.AcademicCap className="w-6 h-6" />
											</div>
										</div>
										<div className="ml-4">
											<h5 className="text-lg font-medium leading-6 text-gray-900">
												Impressive on College Applications
											</h5>
											<p className="mt-2 text-base leading-6 text-gray-500">
											Participation in Model UN is a standout addition to your college applications! 
											It demonstrates your commitment to global issues, your ability to work in a team, 
											and your development in leadership and public speaking skills. 
											It's an experience that shows colleges you're a well-rounded, engaged, and informed applicant. Dublin High MUN alumni have gone on to attend top universities, including Princeton, Stanford, and UC Berkeley.
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
							<svg
								className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
								width="784"
								height="404"
								fill="none"
								viewBox="0 0 784 404"
							>
								<defs>
									<pattern
										id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
										x="0"
										y="0"
										width="20"
										height="20"
										patternUnits="userSpaceOnUse"
									>
										<rect
											x="0"
											y="0"
											width="4"
											height="4"
											className="text-gray-200"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									width="784"
									height="404"
									fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
								/>
							</svg>
							<Img
								className="relative mx-auto"
								fixed={socialsImage}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
