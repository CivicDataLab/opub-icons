import React from 'react'

export function MarginLeft(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,16H9V2h7Zm1,.5V1.5a.5.5,0,0,0-.5-.5h-8a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h8A.5.5,0,0,0,17,16.5Z" />
			<rect height={16} rx="0.5" width={5} x={1} y={1} />
		</svg>
	)
}
