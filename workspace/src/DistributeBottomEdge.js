import React from 'react'

export function DistributeBottomEdge(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3,11.463V15H.25a.25.25,0,0,0-.25.25v.5A.25.25,0,0,0,.25,16h17.5a.25.25,0,0,0,.25-.25v-.5a.25.25,0,0,0-.25-.25H15V11.463A.46351.46351,0,0,0,14.537,11H3.463A.463.463,0,0,0,3,11.463Z" />
			<path d="M5,2.5V6H.25A.25.25,0,0,0,0,6.25v.5A.25.25,0,0,0,.25,7h17.5A.25.25,0,0,0,18,6.75v-.5A.25.25,0,0,0,17.75,6H13V2.5a.5.5,0,0,0-.5-.5h-7A.5.5,0,0,0,5,2.5Z" />
		</svg>
	)
}
