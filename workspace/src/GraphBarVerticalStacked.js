import React from 'react'

export function GraphBarVerticalStacked(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} rx="0.25" width={17} y={16} />
			<rect height={3} width={3} x={5} y={12} />
			<rect height={7} width={3} x={13} y={8} />
			<rect height={2} width={3} x={1} y={13} />
			<rect height={5} width={3} x={9} y={10} />
			<path d="M12,5.5V9H9V5.5A.5.5,0,0,1,9.5,5h2A.5.5,0,0,1,12,5.5Z" />
			<path d="M16,1.5V7H13V1.5a.5.5,0,0,1,.5-.5h2A.5.5,0,0,1,16,1.5Z" />
			<path d="M8,9.5V11H5V9.5A.5.5,0,0,1,5.5,9h2A.5.5,0,0,1,8,9.5Z" />
			<path d="M4,10.5V12H1V10.5a.5.5,0,0,1,.5-.5h2A.5.5,0,0,1,4,10.5Z" />
		</svg>
	)
}
