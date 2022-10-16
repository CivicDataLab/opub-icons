import React from 'react'

export function Money(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={11} cy={7} r={2} />
			<path d="M4,10.5v-7A.5.5,0,0,1,4.5,3h13a.5.5,0,0,1,.5.5v7a.5.5,0,0,1-.5.5H4.5A.5.5,0,0,1,4,10.5ZM17,5.8285A3.008,3.008,0,0,1,15.1715,4H6.8285A3.00753,3.00753,0,0,1,5,5.8285v2.343A3.008,3.008,0,0,1,6.8285,10h8.343A3.00753,3.00753,0,0,1,17,8.1715Z" />
			<path d="M16.5,13H2.5a.5.5,0,0,1-.5-.5v-8A.5.5,0,0,1,2.5,4H3v8H17v.5A.5.5,0,0,1,16.5,13Z" />
			<path d="M14.5,15H.5a.5.5,0,0,1-.5-.5v-8A.5.5,0,0,1,.5,6H1v8H15v.5A.5.5,0,0,1,14.5,15Z" />
		</svg>
	)
}
