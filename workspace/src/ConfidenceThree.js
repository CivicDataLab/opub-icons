import React from 'react'

export function ConfidenceThree(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={4} rx="0.5" width={3} x={1} y={13} />
			<rect height={8} rx="0.5" width={3} x={5} y={9} />
			<rect height={12} rx="0.5" width={3} x={9} y={5} />
			<path d="M16,16.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,16,16.5Z" />
		</svg>
	)
}
