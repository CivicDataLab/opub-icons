import React from 'react'

export function JourneyReport(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={9} rx="0.25" width={1} x={17} y={9} />
			<rect height={6} rx="0.25" width={1} x={15} y={12} />
			<rect height={4} rx="0.25" width={1} x={13} y={14} />
			<rect height={3} rx="0.25" width={1} x={11} y={15} />
			<path d="M10,14a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h2.05a2.5,2.5,0,1,0,0-1H10A2,2,0,0,0,8,5V8H5.95a2.5,2.5,0,1,0,0,1H8v4a2,2,0,0,0,2,2ZM14.5,2A1.5,1.5,0,1,1,13,3.5,1.5,1.5,0,0,1,14.5,2Zm-11,8A1.5,1.5,0,1,1,5,8.5,1.5,1.5,0,0,1,3.5,10Z" />
		</svg>
	)
}
