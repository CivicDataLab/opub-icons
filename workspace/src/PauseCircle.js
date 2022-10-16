import React from 'react'

export function PauseCircle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM8,12.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-7A.5.5,0,0,1,6.5,5h1a.5.5,0,0,1,.5.5Zm4,0a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-7a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Z" />
		</svg>
	)
}
