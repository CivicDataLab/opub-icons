import React from 'react'

export function AlignTop(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} rx="0.25" width={props.width || 18} y={1} />
			<rect height={13} rx="0.5" width={5} x={3} y={3} />
			<rect height={8} rx="0.5" width={5} x={10} y={3} />
		</svg>
	)
}
