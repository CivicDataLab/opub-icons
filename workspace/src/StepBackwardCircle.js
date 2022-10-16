import React from 'react'

export function StepBackwardCircle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,9A8,8,0,1,0,9,1,8,8,0,0,0,1,9ZM11,5.5a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v7a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5ZM3.8,8.6095,8.1875,5.1A.5.5,0,0,1,9,5.4915v7.017a.5.5,0,0,1-.8125.3905L3.8,9.3905a.5.5,0,0,1,0-.781Z" />
		</svg>
	)
}
