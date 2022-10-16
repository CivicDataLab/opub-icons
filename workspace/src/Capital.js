import React from 'react'

export function Capital(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.5,4a.5.5,0,0,1,.5.5V7a.5.5,0,0,1-.5.5h-1A.5.5,0,0,1,6,7V6H5v6h.5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H3V6H2V7a.5.5,0,0,1-.5.5H.5A.5.5,0,0,1,0,7V4.5A.5.5,0,0,1,.5,4Z" />
			<path d="M16.5,4a.5.5,0,0,1,.5.5V7a.5.5,0,0,1-.5.5h-1A.5.5,0,0,1,15,7V6H14v6h.5a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H12V6H11V7a.5.5,0,0,1-.5.5h-1A.5.5,0,0,1,9,7V4.5A.5.5,0,0,1,9.5,4Z" />
		</svg>
	)
}