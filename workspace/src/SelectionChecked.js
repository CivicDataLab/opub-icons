import React from 'react'

export function SelectionChecked(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={3} width={1} x={1} y={10} />
			<rect height={3} width={1} x={1} y={5} />
			<rect height={3} width={1} x={16} y={5} />
			<path d="M2,16V15H1v1.5555A.4445.4445,0,0,0,1.4445,17H3V16Z" />
			<path d="M16.5555,1H15V2h1V3h1V1.444A.444.444,0,0,0,16.556,1Z" />
			<rect height={1} width={3} x={10} y={1} />
			<rect height={1} width={3} x={5} y={1} />
			<rect height={1} width={3} x={5} y={16} />
			<path d="M3,1H1.5a.5.5,0,0,0-.5.5V3H2V2H3Z" />
			<path d="M13.5,9A4.5,4.5,0,1,0,18,13.5,4.5,4.5,0,0,0,13.5,9Zm2.9785,3.13-3.238,3.9645a.25.25,0,0,1-.35172.036L12.8715,16.115,10.492,13.7815a.25.25,0,0,1-.00446-.35353l.00046-.00047.805-.8205a.25.25,0,0,1,.353-.0035l1.2865,1.2595L15.2,11.0865a.25.25,0,0,1,.35-.035l.89.7265a.25.25,0,0,1,.039.3514Z" />
		</svg>
	)
}
