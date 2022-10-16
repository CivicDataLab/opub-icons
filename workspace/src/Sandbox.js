import React from 'react'

export function Sandbox(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} width={1} x={12} y={1} />
			<rect height={1} width={1} x={12} y={1} />
			<rect height={1} width={1} x={14} y={1} />
			<rect height={1} width={1} x={14} y={1} />
			<path d="M17,2V1.5a.5.5,0,0,0-.5-.5H16V2Z" />
			<path d="M17,2V1.5a.5.5,0,0,0-.5-.5H16V2Z" />
			<rect height={1} width={1} x={10} y={3} />
			<rect height={1} width={1} x={10} y={3} />
			<rect height={1} width={1} x={10} y={5} />
			<rect height={1} width={1} x={10} y={5} />
			<rect height={1} width={1} x={10} y={7} />
			<rect height={1} width={1} x={10} y={7} />
			<rect height={1} width={1} x={10} y={9} />
			<rect height={1} width={1} x={10} y={9} />
			<rect height={1} width={1} x={10} y={11} />
			<rect height={1} width={1} x={10} y={11} />
			<rect height={1} width={1} x={10} y={13} />
			<rect height={1} width={1} x={10} y={13} />
			<path d="M11,16V15H10v.5a.5.5,0,0,0,.5.5Z" />
			<path d="M11,16V15H10v.5a.5.5,0,0,0,.5.5Z" />
			<rect height={1} width={1} x={12} y={15} />
			<rect height={1} width={1} x={12} y={15} />
			<rect height={1} width={1} x={14} y={15} />
			<rect height={1} width={1} x={14} y={15} />
			<rect height={1} width={1} x={16} y={3} />
			<rect height={1} width={1} x={16} y={3} />
			<rect height={1} width={1} x={16} y={5} />
			<rect height={1} width={1} x={16} y={5} />
			<rect height={1} width={1} x={16} y={7} />
			<rect height={1} width={1} x={16} y={7} />
			<rect height={1} width={1} x={16} y={9} />
			<rect height={1} width={1} x={16} y={9} />
			<rect height={1} width={1} x={16} y={11} />
			<rect height={1} width={1} x={16} y={11} />
			<rect height={1} width={1} x={16} y={13} />
			<rect height={1} width={1} x={16} y={13} />
			<path d="M17,15.5V15H16v1h.5A.5.5,0,0,0,17,15.5Z" />
			<path d="M17,15.5V15H16v1h.5A.5.5,0,0,0,17,15.5Z" />
			<rect height={15} rx="0.5" width={7} x={1} y={1} />
			<path d="M11,2V1h-.5a.5.5,0,0,0-.5.5V2Z" />
		</svg>
	)
}
