import React from 'react'

export function SmallCap(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11.25,9a.25.25,0,0,0-.25.25v1.5a.25.25,0,0,0,.25.25h.5a.25.25,0,0,0,.25-.25V10h2v5h-.75a.25.25,0,0,0-.25.25v.5a.25.25,0,0,0,.25.25h2.5a.25.25,0,0,0,.25-.25v-.5a.25.25,0,0,0-.25-.25H15V10h2v.75a.25.25,0,0,0,.25.25h.5a.25.25,0,0,0,.25-.25V9.25A.25.25,0,0,0,17.75,9Z" />
			<path d="M13.5,2a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V4H8V14H9.5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H6V4H2V5.5a.5.5,0,0,1-.5.5H.5A.5.5,0,0,1,0,5.5v-3A.5.5,0,0,1,.5,2Z" />
		</svg>
	)
}
