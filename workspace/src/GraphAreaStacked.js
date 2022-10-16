import React from 'react'

export function GraphAreaStacked(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15.1855,8.1605,17,11.789v4.5a.5.5,0,0,1-.5.5H1.5a.5.5,0,0,1-.5-.5v-7.5l5,6L7.792,12.1a.25.25,0,0,1,.416,0L10,14.789l4.7585-6.662a.25.25,0,0,1,.427.0335Z" />
			<path d="M5.8845,12.6195,6.96,11.006a1.25,1.25,0,0,1,2.08,0l.997,1.494L13.99,6.9665a1.25,1.25,0,0,1,2.1355.1675L17,8.8825V3.789L15.215,1.1115a.25.25,0,0,0-.42.006L10,8.789,8.208,6.1a.25.25,0,0,0-.416,0L6,8.789l-5-5V6.758Z" />
		</svg>
	)
}
