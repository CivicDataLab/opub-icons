import React from 'react'

export function TableColumnAddLeft(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M4.5,9.05A4.45,4.45,0,1,0,8.95,13.5,4.45,4.45,0,0,0,4.5,9.05ZM7,13.75a.25.25,0,0,1-.25.25H5v1.75a.25.25,0,0,1-.25.25h-.5A.25.25,0,0,1,4,15.75V14H2.25A.25.25,0,0,1,2,13.75v-.5A.25.25,0,0,1,2.25,13H4V11.25A.25.25,0,0,1,4.25,11h.5a.25.25,0,0,1,.25.25V13H6.75a.25.25,0,0,1,.25.25Z" />
			<path d="M16.5,1H1.5a.5.5,0,0,0-.5.5V8.4465a6.126,6.126,0,0,1,6-.562V7h4v4h-.8845a6.0759,6.0759,0,0,1,.3425,1H11v4h-.8845a6.11783,6.11783,0,0,1-.562,1H16.5a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1ZM11,6H7V2h4Zm5,10H12V12h4Zm0-5H12V7h4Zm0-5H12V2h4Z" />
		</svg>
	)
}
