// organize-imports-ignore
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function LoadableCalendar(): React.ReactElement {
	const sharedCalendarProps = {
		plugins: [
			dayGridPlugin,
			listPlugin,
			googleCalendarPlugin,
			timeGridPlugin,
		],
		googleCalendarApiKey: "AIzaSyB7nKpntp6gBY5fg6l4cUVY-s6nRbwVorE",
		events: {
			googleCalendarId:
				"dublinmodelun@gmail.com",
			className: "gcal-event",
		},
		noEventsContent: "There are no DHSMUN events this month",
		fixedWeekCount: false,
	};
	return (
		<>
			{/* Desktop Version */}
			<div className={"hidden sm:block"}>
				<FullCalendar
					headerToolbar={{
						left: "prev,next today",
						center: "title",
						right:
							"dayGridMonth,timeGridWeek,timeGridDay,listMonth",
					}}
					initialView="dayGridMonth"
					eventClick={(info) => {
						// open events in a new tab
						info.jsEvent.preventDefault();
						window.open(info.event.url, "_blank");
					}}
					{...sharedCalendarProps}
				/>
			</div>
			{/* Mobile Version */}
			<div className={"block sm:hidden"}>
				<FullCalendar
					headerToolbar={{
						left: "title",
						right: "prev,next",
					}}
					initialView="listMonth"
					{...sharedCalendarProps}
				/>
			</div>
		</>
	);
}
