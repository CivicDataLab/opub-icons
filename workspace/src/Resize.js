import React from 'react'

export function Resize(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15.5,2H2.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,15.5,2ZM9,10.414l2.207-2.207,1.366,1.366A.25.25,0,0,0,13,9.3965V5H8.6035a.25.25,0,0,0-.177.427l1.366,1.366L7.586,9H4V4H14V14H9Z" />
		</svg>
	)
}