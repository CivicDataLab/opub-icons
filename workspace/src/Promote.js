import React from 'react'

export function Promote(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3,3A3,3,0,0,0,3,9H6V3Z" />
			<path d="M6.5395,17H5.0855a.75.75,0,0,1-.7275-.568L3,10H6l1.267,6.068A.75.75,0,0,1,6.5395,17Z" />
			<path d="M16.25,11.9785A12.43587,12.43587,0,0,0,8.7125,9H7V3H8.7125A12.66912,12.66912,0,0,0,16.25.0215.634.634,0,0,1,17,.713V11.287a.634.634,0,0,1-.75.6915Z" />
		</svg>
	)
}
