import React from 'react'

export function PagesExclude(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,3H14V1.5a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5H1Z" />
			<path d="M7.8605,16H3V7H15v.592a6.136,6.136,0,0,1,1,.3425V4.5a.5.5,0,0,0-.5-.5H2.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5H8.409A6.13237,6.13237,0,0,1,7.8605,16Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05ZM10,13.5a3.46708,3.46708,0,0,1,.7375-2.126l4.8885,4.8885A3.483,3.483,0,0,1,10,13.5Zm6.2625,2.126L11.374,10.7375a3.483,3.483,0,0,1,4.8885,4.8885Z" />
		</svg>
	)
}
