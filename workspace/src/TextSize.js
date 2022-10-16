import React from 'react'

export function TextSize(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6.75,9A.25.25,0,0,1,7,9.25v1.5a.25.25,0,0,1-.25.25h-.5A.25.25,0,0,1,6,10.75V10H4v5h.75a.25.25,0,0,1,.25.25v.5a.25.25,0,0,1-.25.25H2.25A.25.25,0,0,1,2,15.75v-.5A.25.25,0,0,1,2.25,15H3V10H1v.75A.25.25,0,0,1,.75,11H.25A.25.25,0,0,1,0,10.75V9.25A.25.25,0,0,1,.25,9Z" />
			<path d="M4.5,2a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,6,5.5V4h4V14H8.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H12V4h4V5.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5Z" />
		</svg>
	)
}
