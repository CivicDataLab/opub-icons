import React from 'react'

export function ConfidenceFour(props) {
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
			<rect height={16} rx="0.5" width={3} x={13} y={1} />
		</svg>
	)
}
