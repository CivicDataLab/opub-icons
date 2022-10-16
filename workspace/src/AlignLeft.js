import React from 'react'

export function AlignLeft(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect rx="0.25" width={1} x={1} />
			<rect height={5} rx="0.5" width={13} x={3} y={10} />
			<rect height={5} rx="0.5" width={8} x={3} y={3} />
		</svg>
	)
}
