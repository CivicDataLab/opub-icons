import React from 'react'

export function FullScreenExit(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3,1.25V4H.25A.25.25,0,0,0,0,4.25v.5A.25.25,0,0,0,.25,5H4V1.25A.25.25,0,0,0,3.75,1h-.5A.25.25,0,0,0,3,1.25Z" />
			<path d="M15,4V1.25A.25.25,0,0,0,14.75,1h-.5a.25.25,0,0,0-.25.25V5h3.75A.25.25,0,0,0,18,4.75v-.5A.25.25,0,0,0,17.75,4Z" />
			<path d="M0,13.25v.5A.25.25,0,0,0,.25,14H3v2.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,4,16.75V13H.25A.25.25,0,0,0,0,13.25Z" />
			<path d="M15,14h2.75a.25.25,0,0,0,.25-.25v-.5a.25.25,0,0,0-.25-.25H14v3.75a.25.25,0,0,0,.25.25h.5a.25.25,0,0,0,.25-.25Z" />
			<rect height={8} rx="0.25" width={10} x={4} y={5} />
		</svg>
	)
}
