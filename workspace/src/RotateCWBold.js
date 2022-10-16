import React from 'react'

export function RotateCWBold(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8.015,8.015,0,0,1,6.678,3.614L17.5,3.7605a.345.345,0,0,1,.2655-.0135.35.35,0,0,1,.21318.44671L17.9775,4.197,16.4735,8.35a.25.25,0,0,1-.2945.138L12.0235,6.984a.35.35,0,0,1-.21078-.44785L11.8135,6.534a.343.343,0,0,1,.1805-.195l1.8385-.8615a5.98549,5.98549,0,1,0,.0805,6.9585,1.00028,1.00028,0,1,1,1.637,1.15A8,8,0,1,1,9,1Z" />
		</svg>
	)
}
