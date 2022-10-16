import React from 'react'

export function StopCircle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm4,11.5a.5.5,0,0,1-.5.5h-7a.5.5,0,0,1-.5-.5v-7A.5.5,0,0,1,5.5,5h7a.5.5,0,0,1,.5.5Z" />
		</svg>
	)
}
