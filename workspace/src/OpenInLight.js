import React from 'react'

export function OpenInLight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M2,7.75V2H16V15H9.25a.25.25,0,0,0-.25.25v.5a.25.25,0,0,0,.25.25H16.5a.5.5,0,0,0,.5-.5V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5V7.75A.25.25,0,0,0,1.25,8h.5A.25.25,0,0,0,2,7.75Z" />
			<path d="M2.77,9.4265l1.6945,1.695-3.773,3.773a.25.25,0,0,0,0,.3535L1.75,16.3085a.25.25,0,0,0,.3535,0l3.773-3.773L7.571,14.23A.25.25,0,0,0,8,14.0535V9H2.9465a.25.25,0,0,0-.1765.4265Z" />
		</svg>
	)
}
