import React from 'react'

export function Copy(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} rx="0.25" width={1} x={16} y={11} />
			<rect height={1} rx="0.25" width={1} x={16} y={9} />
			<rect height={1} rx="0.25" width={1} x={16} y={7} />
			<rect height={1} rx="0.25" width={1} x={16} y={5} />
			<rect height={1} rx="0.25" width={1} x={16} y={3} />
			<rect height={1} rx="0.25" width={1} x={16} y={1} />
			<rect height={1} rx="0.25" width={1} x={14} y={1} />
			<rect height={1} rx="0.25" width={1} x={12} y={1} />
			<rect height={1} rx="0.25" width={1} x={10} y={1} />
			<rect height={1} rx="0.25" width={1} x={8} y={1} />
			<rect height={1} rx="0.25" width={1} x={6} y={1} />
			<rect height={1} rx="0.25" width={1} x={6} y={3} />
			<rect height={1} rx="0.25" width={1} x={6} y={5} />
			<rect height={1} rx="0.25" width={1} x={6} y={7} />
			<rect height={1} rx="0.25" width={1} x={6} y={9} />
			<rect height={1} rx="0.25" width={1} x={6} y={11} />
			<rect height={1} rx="0.25" width={1} x={8} y={11} />
			<rect height={1} rx="0.25" width={1} x={10} y={11} />
			<rect height={1} rx="0.25" width={1} x={12} y={11} />
			<rect height={1} rx="0.25" width={1} x={14} y={11} />
			<path d="M5,6H1.5a.5.5,0,0,0-.5.5v10a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5V13H5.5a.5.5,0,0,1-.5-.5Z" />
		</svg>
	)
}
