import React from 'react'

export function DistributeVerticalCenter(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3,11.5V13H.25a.25.25,0,0,0-.25.25v.5A.25.25,0,0,0,.25,14H3v1.5a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V14h2.75a.25.25,0,0,0,.25-.25v-.5a.25.25,0,0,0-.25-.25H15V11.5a.5.5,0,0,0-.5-.5H3.5A.5.5,0,0,0,3,11.5Z" />
			<path d="M5,2.5V4H.25A.25.25,0,0,0,0,4.25v.5A.25.25,0,0,0,.25,5H5V6.5a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5V5h4.75A.25.25,0,0,0,18,4.75v-.5A.25.25,0,0,0,17.75,4H13V2.5a.5.5,0,0,0-.5-.5h-7A.5.5,0,0,0,5,2.5Z" />
		</svg>
	)
}
