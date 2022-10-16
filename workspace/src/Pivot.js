import React from 'react'

export function Pivot(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15,13V6a3,3,0,0,0-3-3H5V.6035A.25.25,0,0,0,4.573.427L0,5,4.573,9.573A.25.25,0,0,0,5,9.3965V7h6v6H8.6035a.25.25,0,0,0-.177.427L13,18l4.573-4.573A.25.25,0,0,0,17.3965,13Z" />
		</svg>
	)
}
