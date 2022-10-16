import React from 'react'

export function OpenIn(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,1H1.5a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,3,8.5V3H15V15H9.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5V1.5A.5.5,0,0,0,16.5,1Z" />
			<path d="M9.318,13.882A.39051.39051,0,0,0,9.6,14a.4.4,0,0,0,.4-.377V8.25A.25.25,0,0,0,9.75,8H4.377A.4.4,0,0,0,4,8.4a.392.392,0,0,0,.1175.28l1.893,1.893-4.521,4.523a.5.5,0,0,0-.00039.70711l.00039.00039.707.707a.5.5,0,0,0,.707,0l4.5215-4.521Z" />
		</svg>
	)
}
