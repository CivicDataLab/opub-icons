import React from 'react'

export function GraphBubble(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={4} cy={4} r={3} />
			<circle cx={3} cy={12} r={2} />
			<path d="M13.25,7.169a2.47049,2.47049,0,1,0-3.2735.2535A5.02,5.02,0,1,0,13.25,7.169Z" />
		</svg>
	)
}
