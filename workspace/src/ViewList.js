import React from 'react'

export function ViewList(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={4} rx="0.5" width={4} x={1} y={1} />
			<rect height={2} rx="0.25" width={11} x={6} y={2} />
			<rect height={2} rx="0.25" width={11} x={6} y={8} />
			<rect height={2} rx="0.25" width={11} x={6} y={14} />
			<rect height={4} rx="0.5" width={4} x={1} y={7} />
			<rect height={4} rx="0.5" width={4} x={1} y={13} />
		</svg>
	)
}
