import React from 'react'

export function LinkOutLight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,8.75V15H2V2H9.25a.25.25,0,0,0,.25-.25v-.5A.25.25,0,0,0,9.25,1H1.5a.5.5,0,0,0-.5.5v14a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V8.75a.25.25,0,0,0-.25-.25h-.5A.25.25,0,0,0,16,8.75Z" />
			<path d="M11.77,1.4265l1.6945,1.695-4.773,4.773a.25.25,0,0,0,0,.3535L9.75,9.3085a.25.25,0,0,0,.3535,0l4.773-4.773L16.571,6.23A.25.25,0,0,0,17,6.0535V1H11.9465a.25.25,0,0,0-.1765.4265Z" />
		</svg>
	)
}