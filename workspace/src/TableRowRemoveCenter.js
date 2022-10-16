import React from 'react'

export function TableRowRemoveCenter(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.95,9.5a4.45,4.45,0,1,0-4.45,4.45A4.45,4.45,0,0,0,17.95,9.5ZM16,9.75a.25.25,0,0,1-.25.25h-4.5A.25.25,0,0,1,11,9.75v-.5A.25.25,0,0,1,11.25,9h4.5a.25.25,0,0,1,.25.25Z" />
			<path d="M1,1.5v16a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V14.5535a6.069,6.069,0,0,1-1,.5615V17H12V15.458a6.06971,6.06971,0,0,1-1-.342V17H7V13H8.654a6.11451,6.11451,0,0,1-.904-2H3V8H7.75a6.11458,6.11458,0,0,1,.9045-2H7V2h4V3.8845a6.07777,6.07777,0,0,1,1-.3425V2h4V3.8845a6.05373,6.05373,0,0,1,1,.5615V1.5a.5.5,0,0,0-.5-.5H1.5A.5.5,0,0,0,1,1.5ZM6,13v4H2V13ZM6,2V6H2V2Z" />
		</svg>
	)
}