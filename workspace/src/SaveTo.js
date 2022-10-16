import React from 'react'

export function SaveTo(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,5h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H15v8H3V7H4.5A.5.5,0,0,0,5,6.5v-1A.5.5,0,0,0,4.5,5h-3a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,16.5,5Z" />
			<path d="M5.1,8.6655,8.8225,12.428a.25.25,0,0,0,.35,0L12.9,8.6655a.391.391,0,0,0,.1-.263.4.4,0,0,0-.4-.4H10V1.5A.5.5,0,0,0,9.5,1h-1a.5.5,0,0,0-.5.5V8H5.4a.4.4,0,0,0-.4.4A.391.391,0,0,0,5.1,8.6655Z" />
		</svg>
	)
}