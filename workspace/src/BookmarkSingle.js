import React from 'react'

export function BookmarkSingle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.031,13.197l4.6875,4.688c.1555.158.2805.1.2805-.126V1.5a.5.5,0,0,0-.5-.5H4.506a.5.5,0,0,0-.5.5L4,17.7755c0,.2285.131.289.293.1405Z" />
		</svg>
	)
}
