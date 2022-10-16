import React from 'react'

export function StepForward(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={14} rx="0.5" width={4} x={1} y={2} />
			<path d="M8,15.4595V2.5405A.5.5,0,0,1,8.8125,2.15L16.887,8.6095a.5.5,0,0,1,0,.781L8.8125,15.85A.5.5,0,0,1,8,15.4595Z" />
		</svg>
	)
}
