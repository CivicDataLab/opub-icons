import React from 'react'

export function Inbox(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} rx="0.25" width={12} x={3} y={2} />
			<rect height={1} rx="0.25" width={12} x={3} y={4} />
			<rect height={1} rx="0.25" width={12} x={3} y={6} />
			<rect height={1} rx="0.25" width={12} x={3} y={8} />
			<path d="M16,5v5H13.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,1-.5.5h-7a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,0-.5-.5H2V5H.5a.5.5,0,0,0-.5.5v10a.5.5,0,0,0,.5.5h17a.5.5,0,0,0,.5-.5V5.5a.5.5,0,0,0-.5-.5Z" />
		</svg>
	)
}
