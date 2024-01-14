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
		name: "Anushka Kumaran",
		position: "President",
		bio: (
			<>
			Hi, I’m Anushka and I am co-president of MVMUN this year! I joined MVMUN 
			in my freshman year and I am currently a junior. I’ve always been passionate 
			about public speaking and political science and through Model UN I was able 
			to meet and work with so many amazing people and gain more valuable experience 
			in these fields. My favorite part of MUN is working and discussing global issues 
			with other delegates, learning about different perspectives and gaining a greater 
			understanding of the world around me. Outside of MUN I enjoy baking, volunteering, 
			playing the trumpet and biking! I’m very excited for the coming year and always 
			feel free to reach out to me if you have any questions! 
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Jerry Wang",
		position: "Vice President",
		bio: (
			<>
			Hey, I’m Jerry and I’m super excited to be your VP this year! I joined MUN freshman 
			year and after a lot of all-nighters, Model U.N still retains its appeal and 
			enjoyable-ness to me currently as a Junior. I’ve been passionate about public speaking 
			and geography from the beginning––and through Model U.N, I have been able to meet 
			people from all around the world, discussing some of the most important modern day 
			topics that humanity is still working to resolve. MUN really strengthens your ability 
			to think critically, as well as gaining cultural perspectives and being more aware of 
			global issues. Outside of MUN, I really enjoy listening to my favorite music, cooking, 
			as well as socializing. I really hope that you gain some valuable experience from MUN 
			while also enjoying the process; and MUN really is just a community, so we are all 
			here for you! 
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Kathryn Foo",
		position: "Vice President",
		bio: (
			<>
			Hey everyone! I’m Kathryn Foo and I’m one of your VPs this year. I joined 
			model un my freshman year and I’ve really found my community here. I’ve so 
			many friends along the way (many shows here) and I’m genuinely so grateful 
			for the people I’ve met along the way. More on me, I love taking photos and 
			reporting on different events, so you might see around with a camera. I also 
			really enjoy reading in my free time and love watching cheesy romance films 
			to pass the time. I’m a total people-person, so if you ever see me around say hi!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Riya Murthy",
		position: "Head of Training",
		bio: (
			<>
			Hi everyone! I’m Riya and I’m super excited to be your Head of Training this 
			year! I’m currently a junior at MVHS, and have been doing MUN for six years 
			— since my first year of middle school. MUN is a super thrilling experience 
			that alongside teaching you political relationships and real-world issues, 
			allows you to learn about public speaking and coming up with speeches on the 
			fly. Outside of MUN, I enjoy reading, writing (both with El Estoque and doing 
			poetry), as well as editing (for a competition called Polyphony Lit). Looking 
			forward to meeting you all!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Ganesh Batchu",
		position: "Training",
		bio: (
			<>
				Hi, my name is Ganesh Batchu, and I am the Training Officer this year! I 
				started MUN at Kennedy in 7th Grade, and continued it when I moved into 
				high school. Some of the things that I enjoy a lot about MUN are crisis 
				committees, and also forming a close bond with partners at various competitions. 
				Some other things I enjoy are reading, programming, and volunteering at various events. 
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Lily Jiang",
		position: "Logistics",
		bio: (
			<>
			Hi, I’m Lily and I’m a logistics officer this year! I joined Model UN as a 
			freshman and this is my third year in MUN! My favorite part about MUN is forming 
			resolutions with other delegates and meeting people from different parts of the 
			country/world in the same committee. Outside of MUN, I enjoy binging shows, playing 
			the violin, and hanging out with my dog!
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Sitong Jian",
		position: "Logistics",
		bio: (
			<>
			Hi, I'm Sitong and I'm a logistics officer this year! I joined Model UN during my sophomore 
			year. I'm mainly a crisis committee guy since I enjoy the fast-paced nature and the sheer insanity
			present. My favorite aspect of Model UN is messing with people in committees.
			Outside of Model UN, I'm a member of marching band and orchestra. I'm into alternate history, worldbuilding,
			and video games.
			
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Pranav Gupta",
		position: "PR",
		bio: (
			<>
			Hi, my name is Pranav Gupta and I am the PR officer this year. I 
			joined Model UN back in middle school and have been involved since. 
			I’ve always been pretty good at speaking, so I joined MUN. Other 
			than Model UN, I like bouldering, playing soccer, and meeting new people.
			</>
		),
		memeBioNickname: "",
		memeBio: "",
	},
	{
		name: "Ethan Kellogg",
		position: "Webmaster",
		bio: (
			<>
			Hi, my name is Ethan Kellogg and I will be your webmaster this year. I 
			joined model UN as a freshman and have been participating in it for 2 
			years. At first, I wasn't too sure about model UN as I was a bad speaker. 
			However, I really enjoyed the arguing and debate aspect of model UN so I 
			stuck with it. Other than model UN, I enjoy playing the trombone and 
			programming. I'm excited to help maintain the website so that members will 
			have a better experience with the club.
			</>
		),
		memeBioNickname: "Why is this exist",
		memeBio: "to get here just put #memes at the end of the url, or use the konami code",
	},
];
