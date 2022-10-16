import React from 'react'

export function Landscape(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={9} cy={7} r={2} />
			<path d="M16.5,3H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0,16.5,3ZM16,14H13V12a2,2,0,0,0-2-2H7a2,2,0,0,0-2,2v2H2V4H16Z" />
		</svg>
	)
}
