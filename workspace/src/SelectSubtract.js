import React from 'react'

export function SelectSubtract(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15,7V6h1V7.5555A.4445.4445,0,0,1,15.5555,8H14V7Z" />
			<path d="M7,15V14H8v1.5555A.4445.4445,0,0,1,7.5555,16H6V15Z" />
			<rect height="2.5" width={1} x={2} y={10} />
			<rect height="2.5" width={1} x={2} y={6} />
			<path d="M3,15V14H2v1.5555A.4445.4445,0,0,0,2.4445,16H4.5V15Z" />
			<path d="M15.5555,2H13.5V3H15V4.5h1V2.444A.444.444,0,0,0,15.556,2Z" />
			<rect height={1} width="2.5005" x="9.5" y={2} />
			<rect height={1} width="2.5005" x="5.5" y={2} />
			<path d="M4,2H2.5a.5.5,0,0,0-.5.5v2H3V3H4Z" />
			<rect height={2} width={1} x={7} y="10.5" />
			<rect height={1} width="2.0005" x="10.5" y={7} />
			<path d="M9,7H7.5a.5.5,0,0,0-.5.5V9H8V8H9Z" />
		</svg>
	)
}
