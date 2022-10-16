import React from 'react'

export function TableColumnAddRight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.05,13.5A4.45,4.45,0,1,0,13.5,9.05,4.45,4.45,0,0,0,9.05,13.5ZM11,13.25a.25.25,0,0,1,.25-.25H13V11.25a.25.25,0,0,1,.25-.25h.5a.25.25,0,0,1,.25.25V13h1.75a.25.25,0,0,1,.25.25v.5a.25.25,0,0,1-.25.25H14v1.75a.25.25,0,0,1-.25.25h-.5a.25.25,0,0,1-.25-.25V14H11.25a.25.25,0,0,1-.25-.25Z" />
			<path d="M7.8845,16H7V12h.542a6.07684,6.07684,0,0,1,.3425-1H7V7h4v.8845a6.126,6.126,0,0,1,6,.562V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5H8.4465A6.11783,6.11783,0,0,1,7.8845,16ZM7,2h4V6H7ZM6,16H2V12H6Zm0-5H2V7H6ZM6,6H2V2H6Z" />
		</svg>
	)
}