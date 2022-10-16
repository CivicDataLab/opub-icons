import React from 'react'

export function Article(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={1} width={5} x={10} y={5} />
			<rect height={1} width={5} x={10} y={9} />
			<rect height={1} width={6} x={3} y={11} />
			<rect height={1} width={5} x={10} y={7} />
			<rect height={1} width={5} x={10} y={11} />
			<rect height={5} width={6} x={3} y={5} />
			<path d="M16.5,2H1.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,16.5,2ZM2,14V3H16V14Z" />
		</svg>
	)
}
