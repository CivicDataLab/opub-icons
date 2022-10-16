import React from 'react'

export function TreeExpandAll(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4.5,4H13V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H4V4.5A.5.5,0,0,1,4.5,4Z" />
			<path d="M5,5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V5.5a.5.5,0,0,0-.5-.5H5.5A.5.5,0,0,0,5,5.5ZM14.75,12H12v2.75a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25V12H7.25A.25.25,0,0,1,7,11.75v-1.5A.25.25,0,0,1,7.25,10H10V7.25A.25.25,0,0,1,10.25,7h1.5a.25.25,0,0,1,.25.25V10h2.75a.25.25,0,0,1,.25.25v1.5A.25.25,0,0,1,14.75,12Z" />
		</svg>
	)
}
