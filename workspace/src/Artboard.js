import React from 'react'

export function Artboard(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4,4.5v12a.5.5,0,0,0,.5.5h12a.5.5,0,0,0,.5-.5V7.457a.5.5,0,0,0-.1465-.3535l-2.957-2.957A.5.5,0,0,0,13.543,4H4.5A.5.5,0,0,0,4,4.5ZM16,16H5V5h8V7.5a.5.5,0,0,0,.5.5H16Z" />
			<rect height={3} width={1} x={4} />
			<rect height={1} width={3} y={4} />
		</svg>
	)
}
