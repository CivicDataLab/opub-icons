import React from 'react'

export function NewItem(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15.5,2H2.5a.5.5,0,0,0-.5.5V9H8.5a.5.5,0,0,1,.5.5V16h6.5a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,15.5,2Z" />
			<path d="M8,16H7.957a.5.5,0,0,1-.3535-.1465l-5.457-5.457A.5.5,0,0,1,2,10.043V10H8Z" />
		</svg>
	)
}
