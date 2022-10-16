import React from 'react'

export function DistributeHorizontally(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={12} rx="0.5" width={6} x={6} y={3} />
			<rect rx="0.25" width={1} x={2} />
			<rect rx="0.25" width={1} x={15} />
		</svg>
	)
}
