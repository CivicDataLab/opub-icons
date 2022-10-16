import React from 'react'

export function TableAndChart(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,10H1.5a.5.5,0,0,0-.5.5v6a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5v-6A.5.5,0,0,0,16.5,10ZM6,16H2V14H6Zm0-3H2V11H6Zm10,3H7V14h9Zm0-3H7V11h9Z" />
			<rect height={8} rx="0.5" width={4} x={13} y={1} />
			<rect height={5} rx="0.5" width={4} x={7} y={4} />
			<rect height={3} rx="0.5" width={4} x={1} y={6} />
		</svg>
	)
}
