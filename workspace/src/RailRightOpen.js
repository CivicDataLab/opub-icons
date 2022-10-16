import React from 'react'

export function RailRightOpen(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7,7h4.503A.497.497,0,0,1,12,7.497v3.006a.497.497,0,0,1-.497.497H7v4.456a.25.25,0,0,1-.424.1755L0,9,6.576,2.368A.25.25,0,0,1,7,2.544Z" />
			<rect height={14} rx="0.3535" width={2} x={14} y={2} />
		</svg>
	)
}
