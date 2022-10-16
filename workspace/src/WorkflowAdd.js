import React from 'react'

export function WorkflowAdd(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,2h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,16.5,2Zm0,5h-2a.493.493,0,0,0-.475.3765A6.11,6.11,0,0,1,17,8.4465V7.5A.5.5,0,0,0,16.5,7ZM12.75,3H9.25A.25.25,0,0,0,9,3.25V8H6.25A.25.25,0,0,0,6,8.25v.5A.25.25,0,0,0,6.25,9H9v.3175A6.163,6.163,0,0,1,10.76,8H10V4h2.75A.25.25,0,0,0,13,3.75v-.5A.25.25,0,0,0,12.75,3ZM4.5,6h-3a.5.5,0,0,0-.5.5v4.6a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5V6.5A.5.5,0,0,0,4.5,6Z" />
			<path d="M13.55,9.1A4.45,4.45,0,1,0,18,13.55,4.45,4.45,0,0,0,13.55,9.1Zm2.5,4.7a.25.25,0,0,1-.25.25H14.05V15.8a.25.25,0,0,1-.25.25h-.5a.25.25,0,0,1-.25-.25V14.05H11.3a.25.25,0,0,1-.25-.25v-.5a.25.25,0,0,1,.25-.25h1.75V11.3a.25.25,0,0,1,.25-.25h.5a.25.25,0,0,1,.25.25v1.75H15.8a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}