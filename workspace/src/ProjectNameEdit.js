import React from 'react'

export function ProjectNameEdit(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7,12H2V2H16V8h1V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H7Z" />
			<path d="M17.5,9h-9a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V11h2v5h-.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H14V11h2v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,17.5,9Z" />
		</svg>
	)
}
