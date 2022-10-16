import React from 'react'

export function TableRowAddTop(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.5,8.95A4.45,4.45,0,1,0,9.05,4.5,4.45,4.45,0,0,0,13.5,8.95ZM11,4.25A.25.25,0,0,1,11.25,4H13V2.25A.25.25,0,0,1,13.25,2h.5a.25.25,0,0,1,.25.25V4h1.75a.25.25,0,0,1,.25.25v.5a.25.25,0,0,1-.25.25H14V6.75a.25.25,0,0,1-.25.25h-.5A.25.25,0,0,1,13,6.75V5H11.25A.25.25,0,0,1,11,4.75Z" />
			<path d="M8.4465,1H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V9.5535a6.11783,6.11783,0,0,1-1,.562V11H12v-.542a6.0759,6.0759,0,0,1-1-.3425V11H7V7h.8845A6.126,6.126,0,0,1,8.4465,1ZM12,12h4v4H12ZM7,12h4v4H7ZM6,11H2V7H6Zm0,5H2V12H6Z" />
		</svg>
	)
}
