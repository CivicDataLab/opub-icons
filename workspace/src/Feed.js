import React from 'react'

export function Feed(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15.5,15H2.5a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2.5,2h13a.5.5,0,0,1,.5.5v12A.5.5,0,0,1,15.5,15ZM15,3H3V6H15Zm0,4H3v3H15Zm0,4H3v3H15Z" />
		</svg>
	)
}
