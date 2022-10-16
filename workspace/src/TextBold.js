import React from 'react'

export function TextBold(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M.5,2a.5.5,0,0,0-.5.5v3A.5.5,0,0,0,.5,6h1A.5.5,0,0,0,2,5.5V4H6V14H4.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h8a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H11V4h4V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5Z" />
		</svg>
	)
}
