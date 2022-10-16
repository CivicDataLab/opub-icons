import React from 'react'

export function DataUpload(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<ellipse cx={9} cy="3.5" rx={8} ry="2.5" />
			<path d="M8.5,15.5l-2.1045-.0055a1.25,1.25,0,0,1-.926-2.0895L6.728,12.012C4.3645,11.774,1.6605,11.183,1,10.135V14.5c0,1.328,3.316,2.411,7.5,2.492Z" />
			<path d="M16.15,9.6175C16.6885,9.281,17,8.9,17,8.5V5.135a6.22955,6.22955,0,0,1-3.507,1.5755Z" />
			<path d="M11.228,7.0315c-.8095.0735-1.582.106-2.228.106-2.468,0-7.106-.584-8-2V8.5c0,1.2395,2.889,2.2655,6.676,2.463Z" />
			<path d="M17.573,13.573a.25.25,0,0,1-.1765.427H15v4H10V14H7.6035a.25.25,0,0,1-.1765-.427L12.5,8Z" />
		</svg>
	)
}
