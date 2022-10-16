import React from 'react'

export function DragHandle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			width={props.width || 18}
			viewBox="0 0 18 18"
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={7} cy={13} r={1} />
			<circle cx={7} cy={10} r={1} />
			<circle cx={7} cy={7} r={1} />
			<circle cx={7} cy={4} r={1} />
			<circle cx={10} cy={13} r={1} />
			<circle cx={10} cy={10} r={1} />
			<circle cx={10} cy={7} r={1} />
			<circle cx={10} cy={4} r={1} />
		</svg>
	)
}
