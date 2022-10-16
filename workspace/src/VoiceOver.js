import React from 'react'

export function VoiceOver(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11.9,3.6a3.4,3.4,0,0,0-6.8,0v6.8a3.4,3.4,0,1,0,6.8,0Z" />
			<path d="M14,10.5V8.25A.25.25,0,0,0,13.75,8h-.5a.25.25,0,0,0-.25.25V10.5a4.5,4.5,0,0,1-9,0V8.25A.25.25,0,0,0,3.75,8h-.5A.25.25,0,0,0,3,8.25V10.5C3,13.3625,5.6785,16,8,16v1H4.25a.25.25,0,0,0-.25.25v.5a.25.25,0,0,0,.25.25h8.5a.25.25,0,0,0,.25-.25v-.5a.25.25,0,0,0-.25-.25H9V15.971C11.3215,15.971,14,13.363,14,10.5Z" />
		</svg>
	)
}
