import React from 'react'

export function Separator(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.5,2H3.5a.5.5,0,0,0-.5.5V7H15V2.5A.5.5,0,0,0,14.5,2ZM3,15.5a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V11H3Z" />
			<rect height={2} rx="0.5" width={16} x={1} y={8} />
		</svg>
	)
}
