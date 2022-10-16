import React from 'react'

export function ZoomIn(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10.75,7H9V5.25A.25.25,0,0,0,8.75,5H7.25A.25.25,0,0,0,7,5.25V7H5.25A.25.25,0,0,0,5,7.25v1.5A.25.25,0,0,0,5.25,9H7v1.75a.25.25,0,0,0,.25.25h1.5A.25.25,0,0,0,9,10.75V9h1.75A.25.25,0,0,0,11,8.75V7.25A.25.25,0,0,0,10.75,7Z" />
			<path d="M17.587,16.1075,13.628,12.15a7.0155,7.0155,0,1,0-1.478,1.4785l3.958,3.958a1.05,1.05,0,0,0,1.479-1.479ZM3,8a5,5,0,1,1,5,5A5,5,0,0,1,3,8Z" />
		</svg>
	)
}