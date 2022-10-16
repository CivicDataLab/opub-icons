import React from 'react'

export function IntersectOverlap(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15.5,6H12V2.5a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,.5.5H6v3.5a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-9A.5.5,0,0,0,15.5,6ZM6,6.5V11H3V3h8V6H6.5A.5.5,0,0,0,6,6.5ZM15,15H7V12h5V7h3Z" />
		</svg>
	)
}
