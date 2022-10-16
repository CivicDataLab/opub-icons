import React from 'react'

export function GraphBullet(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,4.25v1.5A.25.25,0,0,0,1.25,6H4V4H1.25A.25.25,0,0,0,1,4.25Z" />
			<path d="M14.75,4H8V6h6.75A.25.25,0,0,0,15,5.75V4.25A.25.25,0,0,0,14.75,4Z" />
			<path d="M7,8H1.189A.189.189,0,0,0,1,8.189V9.811A.189.189,0,0,0,1.189,10H7Z" />
			<path d="M1,12.25v1.5a.25.25,0,0,0,.25.25H10V12H1.25A.25.25,0,0,0,1,12.25Z" />
			<path d="M16.75,12H14v2h2.75a.25.25,0,0,0,.25-.25v-1.5A.25.25,0,0,0,16.75,12Z" />
			<rect height={4} rx="0.5" width={2} x={5} y={3} />
			<rect height={4} rx="0.5" width={2} x={8} y={7} />
			<rect height={4} rx="0.5" width={2} x={11} y={11} />
		</svg>
	)
}