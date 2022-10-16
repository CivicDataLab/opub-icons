import React from 'react'

export function Comment(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3,2A2,2,0,0,0,1,4v7a2,2,0,0,0,2,2H4v4.3965a.25.25,0,0,0,.427.1765L9,13h6a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Z" />
		</svg>
	)
}
