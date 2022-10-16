import React from 'react'

export function PageBreak(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="10 7 10 12 15 12 10 7" />
			<path d="M3,5.5a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V1H3Z" />
			<path d="M9.5,13a.5.5,0,0,1-.5-.5V7H3.5a.5.5,0,0,0-.5.5V17H15V13Z" />
		</svg>
	)
}
