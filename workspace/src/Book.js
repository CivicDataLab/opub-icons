import React from 'react'

export function Book(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.891,14H4.9975a2,2,0,1,1,0-4H10.259a.5.5,0,0,0,.4-.2l5.55-7.4a.25.25,0,0,0-.2-.4H8.0125a.5.5,0,0,0-.4.2L1.761,9.664A3.9905,3.9905,0,0,0,4.9845,16H10.259a.5.5,0,0,0,.4-.2l5.55-7.4a.25.25,0,0,0-.2-.4H14.391Z" />
		</svg>
	)
}
