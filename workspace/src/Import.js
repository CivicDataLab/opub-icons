import React from 'react'

export function Import(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1H5.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,7,4.5V3h8V15H7V13.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1Z" />
			<path d="M8,12.6a.4.4,0,0,0,.4.4.39352.39352,0,0,0,.2635-.1l3.762-3.7225a.25.25,0,0,0,0-.35L8.666,5.1A.39352.39352,0,0,0,8.4025,5a.4.4,0,0,0-.4.4V8H1.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H8Z" />
		</svg>
	)
}
