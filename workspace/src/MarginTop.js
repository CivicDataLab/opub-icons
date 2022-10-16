import React from 'react'

export function MarginTop(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M2,16V9H16v7Zm15,.5v-8a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v8a.5.5,0,0,0,.5.5h15A.5.5,0,0,0,17,16.5Z" />
			<rect height={5} rx="0.5" width={16} x={1} y={1} />
		</svg>
	)
}
