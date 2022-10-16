import React from 'react'

export function BreakdownAdd(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.542,15H5V13H7.375a6.107,6.107,0,0,1,.509-2H5V9H9.318A6.084,6.084,0,0,1,15,7.542V7.5a.5.5,0,0,0-.5-.5H5V4h9.5a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v2A.5.5,0,0,0,.5,4H3V16.5a.5.5,0,0,0,.5.5H8.4465A6.11305,6.11305,0,0,1,7.542,15Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05Zm2.5,4.7a.25.25,0,0,1-.25.25H14v1.75a.25.25,0,0,1-.25.25h-.5a.25.25,0,0,1-.25-.25V14H11.25a.25.25,0,0,1-.25-.25v-.5a.25.25,0,0,1,.25-.25H13V11.25a.25.25,0,0,1,.25-.25h.5a.25.25,0,0,1,.25.25V13h1.75a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}
