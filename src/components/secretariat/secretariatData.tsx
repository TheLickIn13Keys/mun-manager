import React, { useState } from "react";
function ExpandableBio({
	pre,
	post,
}: {
	pre: React.ReactNode;
	post: React.ReactNode;
}) {
	const [expanded, setExpanded] = useState(false);
	return (
		<>
			{pre}
			<button
				className={
					"py-3 my-2 md:my-1 md:py-1 px-4 md:px-1 rounded-md bg-blue-500 active:bg-blue-600 md:active:bg-white md:bg-white md:underline text-blue-50 md:text-blue-500 active:text-blue-800"
				}
				onFocus={(e) => e.target.blur()}
				onClick={() => setExpanded((old) => !old)}
			>
				{expanded ? "Read Less..." : "Read More..."}
			</button>
			{expanded && <>{post}</>}
		</>
	);
}
export default [
	{
		name: "Bardia Anvari",
		position: "President",
		bio: (
			<>
			Hi, I’m Bardia and I am president of Dublin High MUN this year! I've been doing MUN since Freshman year and haven't looked back since! My favorite part of MUN
			is definitely the people. I've met so many amazing people through MUN and I'm so grateful for the community that MUN has given me.
			Outside of MUN, I like playing jazz, writing code, and reading political theory. I'm looking forward to meeting all of you this year!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Suhani Gupta",
		position: "Vice President",
		bio: (
			<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
			obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
			nihil, eveniet aliquid culpa officia aut!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Anishka Vora",
		position: "Secretary",
		bio: (
			<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
			obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
			nihil, eveniet aliquid culpa officia aut!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Adavya Sharma",
		position: "Secretary",
		bio: (
			<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
			obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
			nihil, eveniet aliquid culpa officia aut!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Charvi Appana",
		position: "Treasurer",
		bio: (
			<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
			obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
			nihil, eveniet aliquid culpa officia aut!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Aditya Suresh",
		position: "Treasurer",
		bio: (
			<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
			obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
			nihil, eveniet aliquid culpa officia aut!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Andre Poghosyan",
		position: "GA Captain",
		bio: (
			<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
			obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
			nihil, eveniet aliquid culpa officia aut!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Amrit Hari",
		position: "Spec Captain",
		bio: (
			<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
			obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
			nihil, eveniet aliquid culpa officia aut!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Shivam Annamali",
		position: "Crisis Captain",
		bio: (
			<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
			obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
			nihil, eveniet aliquid culpa officia aut!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Maegha R",
		position: "PR",
		bio: (
			<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
			numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
			optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
			obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
			nihil, eveniet aliquid culpa officia aut!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
];
