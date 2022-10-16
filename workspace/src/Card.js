import React from 'react'

export function Card(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15.5,1H2.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,15.5,1ZM6,14.75a.25.25,0,0,1-.25.25H3.25A.25.25,0,0,1,3,14.75v-.5A.25.25,0,0,1,3.25,14h2.5a.25.25,0,0,1,.25.25Zm9,0a.25.25,0,0,1-.25.25H8.25A.25.25,0,0,1,8,14.75v-.5A.25.25,0,0,1,8.25,14h6.5a.25.25,0,0,1,.25.25ZM15,11H3V2H15Z" />
		</svg>
	)
}
