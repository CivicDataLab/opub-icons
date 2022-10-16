import React from 'react'

export function MBox(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,2H1.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,16.5,2ZM16,15H2V5H16Z" />
			<rect height={1} width={1} x={3} y={6} />
			<rect height={1} width={1} x={3} y={11} />
			<rect height={1} width={2} x={5} y={6} />
			<rect height={1} width={2} x={8} y={6} />
			<rect height={1} width={2} x={11} y={6} />
			<rect height={1} width={2} x={5} y={13} />
			<rect height={1} width={2} x={8} y={13} />
			<rect height={1} width={2} x={11} y={13} />
			<rect height={1} width={1} x={14} y={6} />
			<rect height={1} width={1} x={14} y={8} />
			<rect height={2} width={1} x={3} y={8} />
			<rect height={2} width={1} x={14} y={10} />
			<rect height={1} width={1} x={3} y={13} />
			<rect height={1} width={1} x={14} y={13} />
		</svg>
	)
}
