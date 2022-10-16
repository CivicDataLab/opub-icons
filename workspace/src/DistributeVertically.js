import React from 'react'

export function DistributeVertically(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={6} rx="0.5" width={12} x={3} y={6} />
			<rect height={1} rx="0.25" width={props.width || 18} y={15} />
			<rect height={1} rx="0.25" width={props.width || 18} y={2} />
		</svg>
	)
}
