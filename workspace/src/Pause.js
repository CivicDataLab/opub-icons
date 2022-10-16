import React from 'react'

export function Pause(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={14} rx="0.5" width={4} x={3} y={2} />
			<rect height={14} rx="0.5" width={4} x={10} y={2} />
		</svg>
	)
}
