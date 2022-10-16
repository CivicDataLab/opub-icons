import React from 'react'

export function Segment(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5.559,7H17.441A.55951.55951,0,0,0,18,6.441V2.559A.559.559,0,0,0,17.441,2H5.559A.559.559,0,0,0,5,2.559V4H3A1,1,0,0,0,2,5V6.55a2.5,2.5,0,0,0,0,4.9V13a1,1,0,0,0,1,1H5v1.441A.55951.55951,0,0,0,5.559,16H17.441A.55951.55951,0,0,0,18,15.441V11.559A.559.559,0,0,0,17.441,11H5.559A.559.559,0,0,0,5,11.559V13H3V11.45a2.5,2.5,0,0,0,0-4.9V5H5V6.441A.55951.55951,0,0,0,5.559,7ZM4,9A1.5,1.5,0,1,1,2.5,7.5,1.5,1.5,0,0,1,4,9Z" />
		</svg>
	)
}