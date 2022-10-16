import React from 'react'

export function SelectAdd(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={3} width={1} x={1} y={5} />
			<path d="M2,11V10H1v1.5555A.4445.4445,0,0,0,1.4445,12H3V11Z" />
			<path d="M12,6V5H11V6.5555A.4445.4445,0,0,0,11.4445,7H13V6Z" />
			<path d="M7,16V15H6v1.5555A.4445.4445,0,0,0,6.4445,17H8V16Z" />
			<rect height={1} width={3} x={10} y={16} />
			<rect height={3} width={1} x={16} y={10} />
			<path d="M16,15v1H15v1h1.5a.5.5,0,0,0,.5-.5V15Z" />
			<path d="M11.5555,1H10V2h1V3h1V1.4445A.4445.4445,0,0,0,11.5555,1Z" />
			<path d="M16.5555,6H15V7h1V8h1V6.4445A.4445.4445,0,0,0,16.5555,6Z" />
			<path d="M6.5555,11H5v1H6v1H7V11.4445A.4445.4445,0,0,0,6.5555,11Z" />
			<rect height={1} width={3} x={5} y={1} />
			<path d="M3,1H1.5a.5.5,0,0,0-.5.5V3H2V2H3Z" />
		</svg>
	)
}