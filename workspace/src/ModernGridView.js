import React from 'react'

export function ModernGridView(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={7} rx="0.5" width={10} x={1} y={1} />
			<rect height={7} rx="0.5" width={4} x={13} y={1} />
			<rect height={7} rx="0.5" width={4} x={1} y={10} />
			<rect height={7} rx="0.5" width={10} x={7} y={10} />
		</svg>
	)
}
