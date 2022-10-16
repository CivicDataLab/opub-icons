import React from 'react'

export function Breakdown(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,3.5v-2a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5H4V16.5a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H6V13h9.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H6V9h9.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H6V4h9.5A.5.5,0,0,0,16,3.5Z" />
		</svg>
	)
}
