import React from 'react'

export function StepForwardCircle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM7,12.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-7A.5.5,0,0,1,5.5,5h1a.5.5,0,0,1,.5.5Zm7.2-3.1095L9.8125,12.9A.5.5,0,0,1,9,12.5085V5.4915a.5.5,0,0,1,.8125-.3905L14.2,8.6095a.5.5,0,0,1,0,.781Z" />
		</svg>
	)
}
