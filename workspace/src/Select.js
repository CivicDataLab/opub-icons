import React from 'react'

export function Select(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4.25,1.027a.25.25,0,0,0-.25.25v16.39a.25.25,0,0,0,.25.25.245.245,0,0,0,.175-.0735L9.262,13h6.5a.25.25,0,0,0,.177-.427L4.427,1.1A.245.245,0,0,0,4.25,1.027Z" />
		</svg>
	)
}
