import React from 'react'

export function Selection(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height="2.5" width={1} x={2} y={10} />
			<rect height="2.5" width={1} x={2} y={6} />
			<path d="M3,15V14H2v1.5555A.4445.4445,0,0,0,2.4445,16H4.5V15Z" />
			<rect height={1} width="2.5" x={6} y={15} />
			<rect height={1} width="2.5" x={10} y={15} />
			<rect height="2.5" width={1} x={15} y="5.5" />
			<rect height="2.5" width={1} x={15} y="9.5" />
			<path d="M15,13.5V15H14v1h1.5a.5.5,0,0,0,.5-.5v-2Z" />
			<path d="M15.556,2H13.5V3H15V4h1V2.4445A.4445.4445,0,0,0,15.556,2Z" />
			<rect height={1} width="2.5005" x="9.5" y={2} />
			<rect height={1} width="2.5005" x="5.5" y={2} />
			<path d="M4,2H2.5a.5.5,0,0,0-.5.5v2H3V3H4Z" />
		</svg>
	)
}
