import React from 'react'

export function ShowMenu(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={14} x={2} y={8} />
			<rect height={2} rx="0.5" width={14} x={2} y={3} />
			<rect height={2} rx="0.5" width={14} x={2} y={13} />
		</svg>
	)
}