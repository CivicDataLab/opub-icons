import React from 'react'

export function Form(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} rx="0.177" width={16} x={1} y={3} />
			<rect height={1} rx="0.177" width={16} x={1} y={7} />
			<path d="M16,12v3H2V12Zm.75-1H1.25a.25.25,0,0,0-.25.25v4.5a.25.25,0,0,0,.25.25h15.5a.25.25,0,0,0,.25-.25v-4.5A.25.25,0,0,0,16.75,11Z" />
		</svg>
	)
}
