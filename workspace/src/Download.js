import React from 'react'

export function Download(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,12h-1a.5.5,0,0,0-.5.5V15H3V12.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,16.5,12Z" />
			<path d="M8.8245,13.428a.25.25,0,0,0,.35,0L12.9,9.6655a.391.391,0,0,0,.1-.263.4.4,0,0,0-.4-.4H10V1.5A.5.5,0,0,0,9.5,1h-1a.5.5,0,0,0-.5.5V9H5.4a.4.4,0,0,0-.4.4.391.391,0,0,0,.1.263Z" />
		</svg>
	)
}
