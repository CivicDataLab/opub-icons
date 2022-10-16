import React from 'react'

export function WebPage(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3,4.5v12a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V4.5a.5.5,0,0,0-.5-.5H3.5A.5.5,0,0,0,3,4.5ZM16,16H4V7H16Z" />
			<path d="M2,3H15V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5H2Z" />
			<path d="M3,4.5v12a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V4.5a.5.5,0,0,0-.5-.5H3.5A.5.5,0,0,0,3,4.5ZM16,16H4V7H16Z" />
			<path d="M2,3H15V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5H2Z" />
		</svg>
	)
}
