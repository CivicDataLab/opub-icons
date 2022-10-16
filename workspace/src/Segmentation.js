import React from 'react'

export function Segmentation(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={9} cy={9} r="2.1005" />
			<path d="M13.0745,9.75a4.12348,4.12348,0,0,1-5.5975,3.1L5.4185,16.1435A7.98449,7.98449,0,0,0,16.962,9.75Z" />
			<path d="M9.75,4.9255a4.13351,4.13351,0,0,1,2.13,1.095L15.0395,3.764A7.97551,7.97551,0,0,0,9.75,1.038Z" />
			<path d="M15.9115,4.985,12.75,7.2445A4.11065,4.11065,0,0,1,13.0765,8.25H16.964A7.93442,7.93442,0,0,0,15.9115,4.985Z" />
			<path d="M6.208,12.05A4.13,4.13,0,0,1,8.25,4.9255V1.038A7.9905,7.9905,0,0,0,4.147,15.35Z" />
		</svg>
	)
}
