import React from 'react'

export function ViewAllTag(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={2} x={1} y={1} />
			<rect height={2} rx="0.5" width={11} x={5} y={1} />
			<rect height={2} rx="0.5" width={2} x={1} y={5} />
			<rect height={2} rx="0.5" width={11} x={5} y={5} />
			<rect height={2} rx="0.5" width={2} x={1} y={9} />
			<rect height={2} rx="0.5" width={2} x={1} y={13} />
			<path d="M17.834,13.053l-4.94-4.9395A.386.386,0,0,0,12.621,8H8.386A.386.386,0,0,0,8,8.386v4.2355a.386.386,0,0,0,.113.273l4.9395,4.94a.386.386,0,0,0,.54589.00011l.00011-.00011L17.834,13.6a.386.386,0,0,0,.00111-.54588ZM10.2,11.474A1.274,1.274,0,1,1,11.474,10.2,1.274,1.274,0,0,1,10.2,11.474Z" />
			<path d="M7.147,13.6c-.166-.166-.1115-.378-.1765-.6H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H8.5455Z" />
			<path d="M7,9H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H7Z" />
		</svg>
	)
}