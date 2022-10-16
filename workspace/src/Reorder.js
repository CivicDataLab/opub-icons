import React from 'react'

export function Reorder(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,2a.497.497,0,0,0-.3735.168l-5.5,5A.48949.48949,0,0,0,3,7.497.5.5,0,0,0,3.497,8H14.5a.5.5,0,0,0,.5-.5V7.497a.48949.48949,0,0,0-.1275-.329l-5.5-5A.5.5,0,0,0,9,2Z" />
			<path d="M9,16a.5.5,0,0,0,.3735-.168l5.5-5A.48949.48949,0,0,0,15,10.503.5.5,0,0,0,14.503,10H3.5a.5.5,0,0,0-.5.5v.003a.48949.48949,0,0,0,.1275.329l5.5,5A.497.497,0,0,0,9,16Z" />
		</svg>
	)
}