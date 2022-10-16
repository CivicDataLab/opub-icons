import React from 'react'

export function PasteList(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11,3V2A2,2,0,0,0,7,2V3H5V5h8V3ZM10,3H8V2a1,1,0,0,1,2,0Z" />
			<path d="M15.5,3H14V5.5a.5.5,0,0,1-.5.5h-9A.5.5,0,0,1,4,5.5V3H2.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0,15.5,3ZM6,13.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Zm0-4a.5.5,0,0,1-.5.5h-1A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8h1a.5.5,0,0,1,.5.5Zm7,3.25a.25.25,0,0,1-.25.25H8.25A.25.25,0,0,1,8,12.75v-.5A.25.25,0,0,1,8.25,12h4.5a.25.25,0,0,1,.25.25Zm0-4a.25.25,0,0,1-.25.25H8.25A.25.25,0,0,1,8,8.75v-.5A.25.25,0,0,1,8.25,8h4.5a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}
