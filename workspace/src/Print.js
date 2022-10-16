import React from 'react'

export function Print(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.5,5H15V1.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5V5H.5a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5H2v3.5a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V13h1.5a.5.5,0,0,0,.5-.5v-7A.5.5,0,0,0,17.5,5ZM4,2H14V5H4ZM15,16H3V10H15Z" />
			<rect height={1} width={8} x={5} y={13} />
			<rect height={1} width={8} x={5} y={11} />
		</svg>
	)
}
