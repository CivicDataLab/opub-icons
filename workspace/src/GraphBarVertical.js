import React from 'react'

export function GraphBarVertical(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13,1.5V15h3V1.5a.5.5,0,0,0-.5-.5h-2A.5.5,0,0,0,13,1.5Z" />
			<path d="M9,6.5V15h3V6.5a.5.5,0,0,0-.5-.5h-2A.5.5,0,0,0,9,6.5Z" />
			<path d="M5,10.5V15H8V10.5a.5.5,0,0,0-.5-.5h-2A.5.5,0,0,0,5,10.5Z" />
			<path d="M1,12.5V15H4V12.5a.5.5,0,0,0-.5-.5h-2A.5.5,0,0,0,1,12.5Z" />
			<rect height={1} rx="0.25" width={17} y={16} />
		</svg>
	)
}
