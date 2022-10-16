import React from 'react'

export function TextAlignCenter(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={10} x={4} y={14} />
			<rect height={2} rx="0.5" width={16} x={1} y={10} />
			<rect height={2} rx="0.5" width={16} x={1} y={2} />
			<rect height={2} rx="0.5" width={10} x={4} y={6} />
		</svg>
	)
}
