import React from 'react'

export function RailBottom(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.4375,2H.5625A.57351.57351,0,0,0,0,2.5835v12.833A.57351.57351,0,0,0,.5625,16h16.875A.5735.5735,0,0,0,18,15.4165V2.5835A.5735.5735,0,0,0,17.4375,2ZM10.3,13.75a.25.25,0,0,1-.25.25H1.25A.25.25,0,0,1,1,13.75v-.5A.25.25,0,0,1,1.25,13h8.8a.25.25,0,0,1,.25.25ZM17,12H1V4H17Z" />
		</svg>
	)
}
