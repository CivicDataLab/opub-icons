import React from 'react'

export function RailRightClose(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11,7H6.497A.497.497,0,0,0,6,7.497v3.006A.497.497,0,0,0,6.497,11H11v4.456a.25.25,0,0,0,.424.1755L18,9,11.424,2.368A.25.25,0,0,0,11,2.544Z" />
			<rect height={14} rx="0.3535" width={2} x={2} y={2} />
		</svg>
	)
}
