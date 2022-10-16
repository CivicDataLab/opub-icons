import React from 'react'

export function SelectIntersect(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={3} width={1} x={1} y={5} />
			<path d="M2,11V10H1v1.5555A.4445.4445,0,0,0,1.4445,12H4V11Z" />
			<path d="M7,16V14H6v2.5555A.4445.4445,0,0,0,6.4445,17H8V16Z" />
			<rect height={1} width={3} x={10} y={16} />
			<rect height={3} width={1} x={16} y={10} />
			<path d="M16,15v1H15v1h1.5a.5.5,0,0,0,.5-.5V15Z" />
			<path d="M11.5555,1H10V2h1V4h1V1.4445A.4445.4445,0,0,0,11.5555,1Z" />
			<path d="M16.5555,6H14V7h2V8h1V6.4445A.4445.4445,0,0,0,16.5555,6Z" />
			<rect height={1} width={3} x={5} y={1} />
			<path d="M3,1H1.5a.5.5,0,0,0-.5.5V3H2V2H3Z" />
			<rect height="1.1315" width="1.125" x={6} y={6} />
			<rect height="1.1315" width="1.125" x="8.42" y={6} />
			<rect height="1.1315" width="1.125" x="10.8695" y="6.005" />
			<rect height="1.1315" width="1.125" x={6} y="8.412" />
			<rect height="1.1315" width="1.125" x="8.42" y="8.412" />
			<rect height="1.1315" width="1.125" x="8.42" y="10.7535" />
			<rect height="1.1315" width="1.125" x="10.8695" y="8.417" />
			<rect height="1.1315" width="1.125" x="6.005" y="10.8685" />
			<rect height="1.1315" width="1.125" x="10.8745" y="10.7535" />
		</svg>
	)
}