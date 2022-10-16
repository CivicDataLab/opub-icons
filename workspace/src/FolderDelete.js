import React from 'react'

export function FolderDelete(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.35,13.5A6.1465,6.1465,0,0,1,17,8.4465V4.5a.5.5,0,0,0-.5-.5H1V14.5a.5.5,0,0,0,.5.5H7.542A6.12559,6.12559,0,0,1,7.35,13.5Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05Zm2.5,4.7a.25.25,0,0,1-.25.25h-4.5a.25.25,0,0,1-.25-.25v-.5a.25.25,0,0,1,.25-.25h4.5a.25.25,0,0,1,.25.25Z" />
			<path d="M8,3H1V1.75A.75.75,0,0,1,1.75,1H5.586a1,1,0,0,1,.707.293Z" />
		</svg>
	)
}
