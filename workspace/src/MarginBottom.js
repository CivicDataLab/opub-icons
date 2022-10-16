import React from 'react'

export function MarginBottom(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,1.5v7H2v-7Zm.5-1H1.5A.5.5,0,0,0,1,1V9a.5.5,0,0,0,.5.5h15A.5.5,0,0,0,17,9V1A.5.5,0,0,0,16.5.5Z" />
			<rect height={5} rx="0.5" width={16} x={1} y="11.5" />
		</svg>
	)
}
