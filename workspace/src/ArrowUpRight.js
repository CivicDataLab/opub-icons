import React from 'react'

export function ArrowUpRight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.1,9.142,6.0905,16.15a.5.5,0,0,1-.707,0L1.85,12.6165a.5.5,0,0,1,0-.707L8.858,4.9,6.386,2.427A.25.25,0,0,1,6.5625,2H16v9.4375a.25.25,0,0,1-.427.1765Z" />
		</svg>
	)
}
