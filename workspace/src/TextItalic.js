import React from 'react'

export function TextItalic(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3.9595,2a.7805.7805,0,0,0-.6755.5l-1.0545,3A.3425.3425,0,0,0,2.554,6h1a.7785.7785,0,0,0,.6755-.5L4.757,4h4L5.243,14h-1.5a.7785.7785,0,0,0-.6755.5l-.35,1a.3425.3425,0,0,0,.3245.5h5a.7785.7785,0,0,0,.6755-.5l.35-1A.342.342,0,0,0,8.743,14h-1.5L10.757,4h4l-.5275,1.5a.3425.3425,0,0,0,.3245.5h1a.7785.7785,0,0,0,.6755-.5l1.0545-3a.343.343,0,0,0-.3245-.5Z" />
		</svg>
	)
}
