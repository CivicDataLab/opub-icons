import React from 'react'

export function Temperature(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10,10.184V5H8v5.184a3,3,0,1,0,2,0Z" />
			<path d="M9,.9A2.1,2.1,0,0,1,11.1,3h0V9.4705l.3575.27a4.10006,4.10006,0,1,1-4.915,0l.3575-.27V3A2.1,2.1,0,0,1,9,.9ZM9,0A3,3,0,0,0,6,3V9.0225a5,5,0,1,0,6,0V3A3,3,0,0,0,9,0Z" />
		</svg>
	)
}
