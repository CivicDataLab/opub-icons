import React from 'react'

export function TextRomanLowercase(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={11} x={7} y={2} />
			<rect height={2} rx="0.5" width={11} x={7} y={8} />
			<rect height={2} rx="0.5" width={11} x={7} y={14} />
			<path d="M5,1V.25A.25.25,0,0,0,4.75,0h-.5A.25.25,0,0,0,4,.25V1Z" />
			<path d="M4,2V4.75A.25.25,0,0,0,4.25,5h.5A.25.25,0,0,0,5,4.75V2Z" />
			<path d="M4,7V6.25A.25.25,0,0,0,3.75,6h-.5A.25.25,0,0,0,3,6.25V7Z" />
			<path d="M3,8v2.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,4,10.75V8Z" />
			<path d="M6,7V6.25A.25.25,0,0,0,5.75,6h-.5A.25.25,0,0,0,5,6.25V7Z" />
			<path d="M5,8v2.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,6,10.75V8Z" />
			<path d="M4,13v-.75A.25.25,0,0,0,3.75,12h-.5a.25.25,0,0,0-.25.25V13Z" />
			<path d="M3,14v2.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,4,16.75V14Z" />
			<path d="M6,13v-.75A.25.25,0,0,0,5.75,12h-.5a.25.25,0,0,0-.25.25V13Z" />
			<path d="M5,14v2.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,6,16.75V14Z" />
			<path d="M2,13v-.75A.25.25,0,0,0,1.75,12h-.5a.25.25,0,0,0-.25.25V13Z" />
			<path d="M1,14v2.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,2,16.75V14Z" />
		</svg>
	)
}
