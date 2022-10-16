import React from 'react'

export function RectSelect(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} width={3} x={5} y={2} />
			<rect height={1} width={3} x={10} y={2} />
			<path d="M1.5,2a.5.5,0,0,0-.5.5V4H2V3H3V2Z" />
			<rect height={2} width={1} x={1} y={6} />
			<rect height={2} width={1} x={1} y={10} />
			<path d="M2,15V14H1v1.5a.5.5,0,0,0,.5.5H3V15Z" />
			<rect height={1} width={3} x={5} y={15} />
			<rect height={1} width={3} x={10} y={15} />
			<path d="M15,2V3h1V4h1V2.5a.5.5,0,0,0-.5-.5Z" />
			<rect height={2} width={1} x={16} y={6} />
			<rect height={2} width={1} x={16} y={10} />
			<path d="M16,14v1H15v1h1.5a.5.5,0,0,0,.5-.5V14Z" />
		</svg>
	)
}
