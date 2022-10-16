import React from 'react'

export function FolderAdd(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.5,8A5.475,5.475,0,0,1,17,9.261V4.5a.5.5,0,0,0-.5-.5l-7.166.004-1.65-1.7A1,1,0,0,0,6.9645,2H2A1,1,0,0,0,1,3V14.5a.5.5,0,0,0,.5.5H8.2135A5.48451,5.48451,0,0,1,13.5,8ZM2,3H6.9645L8.908,5H2Z" />
			<path d="M13.5,9A4.5,4.5,0,1,0,18,13.5,4.5,4.5,0,0,0,13.5,9Zm2.7,5a.25.25,0,0,1-.25.25h-1.7v1.7a.25.25,0,0,1-.25.25H13a.25.25,0,0,1-.25-.25v-1.7h-1.7A.25.25,0,0,1,10.8,14V13a.25.25,0,0,1,.25-.25h1.7v-1.7A.25.25,0,0,1,13,10.8h1a.25.25,0,0,1,.25.25v1.7h1.7a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}
