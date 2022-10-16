import React from 'react'

export function CalendarLocked(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.5805,12.024h-.622v-.7385A4.13177,4.13177,0,0,0,13,7a4.13177,4.13177,0,0,0-3.9585,4.2855v.7385H8.396A.413.413,0,0,0,8,12.4525v5.119A.413.413,0,0,0,8.396,18h9.1845a.413.413,0,0,0,.3955-.4285v-5.119A.4125.4125,0,0,0,17.5805,12.024Zm-6.622-.7385c0-1.42.73-2.5715,2.0415-2.5715s2.0415,1.15,2.0415,2.5715v.7385h-4.083Zm2.833,4.381v.905A.413.413,0,0,1,13.396,17h-.792a.413.413,0,0,1-.3955-.4285v-.905a1.326,1.326,0,0,1-.396-.95,1.191,1.191,0,1,1,2.375,0A1.326,1.326,0,0,1,13.7915,15.6665Z" />
			<path d="M6.7335,12.5A1.48146,1.48146,0,0,1,6.823,12H2V3H4v.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,6,3.5V3h5v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V3h2V5.87a4.9106,4.9106,0,0,1,1,.646V2.5a.5.5,0,0,0-.5-.5H13V.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V2H6V.5A.5.5,0,0,0,5.5,0h-1A.5.5,0,0,0,4,.5V2H1.5a.5.5,0,0,0-.5.5v10a.5.5,0,0,0,.5.5H6.7335Z" />
		</svg>
	)
}
