import React from 'react'

export function MultipleAdd(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.5,1h-5a.5.5,0,0,0-.5.5V4h2a1,1,0,0,1,1,1V7h2.5a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,14.5,1Z" />
			<rect height={6} rx="0.5" width={6} x={1} y={9} />
			<path d="M8,9v1.746a6.17548,6.17548,0,0,1,3-2.8665V5.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V8H7A1,1,0,0,1,8,9Z" />
			<path d="M13.55,9.1A4.45,4.45,0,1,0,18,13.55,4.45,4.45,0,0,0,13.55,9.1Zm2.5,4.7a.25.25,0,0,1-.25.25H14.05V15.8a.25.25,0,0,1-.25.25h-.5a.25.25,0,0,1-.25-.25V14.05H11.3a.25.25,0,0,1-.25-.25v-.5a.25.25,0,0,1,.25-.25h1.75V11.3a.25.25,0,0,1,.25-.25h.5a.25.25,0,0,1,.25.25v1.75H15.8a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}
