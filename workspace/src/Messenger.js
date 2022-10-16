import React from 'react'

export function Messenger(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,1.1615A7.59421,7.59421,0,0,0,1.211,8.542,7.168,7.168,0,0,0,3.5455,13.8v3.781L6.883,15.645A8.20687,8.20687,0,0,0,9,15.9225,7.59421,7.59421,0,0,0,16.789,8.542,7.59421,7.59421,0,0,0,9,1.1615Zm.8195,9.8565L7.795,8.941,4.1,11,8.1835,6.529,10.225,8.518l3.7315-2.024Z" />
		</svg>
	)
}
