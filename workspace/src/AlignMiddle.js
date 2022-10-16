import React from 'react'

export function AlignMiddle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.75,8H15V4.5a.5.5,0,0,0-.5-.5h-4a.5.5,0,0,0-.5.5V8H8V2.5A.5.5,0,0,0,7.5,2h-4a.5.5,0,0,0-.5.5V8H.25A.25.25,0,0,0,0,8.25v.5A.25.25,0,0,0,.25,9H3v5.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V9h2v3.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V9h2.75A.25.25,0,0,0,18,8.75v-.5A.25.25,0,0,0,17.75,8Z" />
		</svg>
	)
}
