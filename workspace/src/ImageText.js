import React from 'react'

export function ImageText(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.5,9h-9a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V11h2v5h-.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H14V11h2v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,17.5,9Z" />
			<path d="M15.5,1H1.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H7V9A1,1,0,0,1,8,8H9.3435L6.636,5.293a1,1,0,0,0-1.414,0L2,8.5145V2H15V8h1V1.5A.5.5,0,0,0,15.5,1Z" />
			<circle cx="12.35" cy="4.65" r="1.35" />
		</svg>
	)
}