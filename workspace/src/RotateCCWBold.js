import React from 'react'

export function RotateCCWBold(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1A8.015,8.015,0,0,0,2.322,4.614L.5,3.7605A.345.345,0,0,0,.2345,3.747a.35.35,0,0,0-.21318.44671L.0225,4.197,1.5265,8.35a.25.25,0,0,0,.2945.138L5.9765,6.984a.35.35,0,0,0,.21078-.44785L6.1865,6.534a.343.343,0,0,0-.1805-.195l-1.8385-.86a5.98551,5.98551,0,1,1-.0805,6.9585,1.00028,1.00028,0,0,0-1.637,1.15A8,8,0,1,0,9,1Z" />
		</svg>
	)
}
