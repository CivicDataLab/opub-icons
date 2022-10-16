import React from 'react'

export function DistributeTopEdge(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M0,11.25v.5A.25.25,0,0,0,.25,12H3v3.5a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V12h2.75a.25.25,0,0,0,.25-.25v-.5a.25.25,0,0,0-.25-.25H.25A.25.25,0,0,0,0,11.25Z" />
			<path d="M0,2.25v.5A.25.25,0,0,0,.25,3H5V6.5a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5V3h4.75A.25.25,0,0,0,18,2.75v-.5A.25.25,0,0,0,17.75,2H.25A.25.25,0,0,0,0,2.25Z" />
		</svg>
	)
}
