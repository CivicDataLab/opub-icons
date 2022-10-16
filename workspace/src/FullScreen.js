import React from 'react'

export function FullScreen(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,12.25V15H13.25a.25.25,0,0,0-.25.25v.5a.25.25,0,0,0,.25.25H17V12.25a.25.25,0,0,0-.25-.25h-.5A.25.25,0,0,0,16,12.25Z" />
			<path d="M2,15V12.25A.25.25,0,0,0,1.75,12h-.5a.25.25,0,0,0-.25.25V16H4.75A.25.25,0,0,0,5,15.75v-.5A.25.25,0,0,0,4.75,15Z" />
			<path d="M13,2.25v.5a.25.25,0,0,0,.25.25H16V5.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,17,5.75V2H13.25A.25.25,0,0,0,13,2.25Z" />
			<path d="M2,3H4.75A.25.25,0,0,0,5,2.75v-.5A.25.25,0,0,0,4.75,2H1V5.75A.25.25,0,0,0,1.25,6h.5A.25.25,0,0,0,2,5.75Z" />
			<rect height={8} rx="0.25" width={10} x={4} y={5} />
		</svg>
	)
}