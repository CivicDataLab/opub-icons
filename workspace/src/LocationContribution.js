import React from 'react'

export function LocationContribution(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,2.5v13a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V2.5a.5.5,0,0,0-.5-.5H1.5A.5.5,0,0,0,1,2.5ZM3,4h9v7H3ZM3,14V12h9v2Zm12,0H13V4h2Z" />
			<path d="M9.419,5.173,6.925,8.7365,5.505,7.45a.25.25,0,0,0-.353.0175l-.4695.519a.25.25,0,0,0,.0175.353l1.92,1.738a.605.605,0,0,0,.9-.1L10.4,5.861a.25.25,0,0,0-.0594-.34853L10.3385,5.511l-.5735-.4A.25.25,0,0,0,9.419,5.173Z" />
		</svg>
	)
}
