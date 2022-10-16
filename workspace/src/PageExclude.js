import React from 'react'

export function PageExclude(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.5295,15H1V5H15V7.592a6.136,6.136,0,0,1,1,.3425V2.5a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5H7.8605A6.089,6.089,0,0,1,7.5295,15Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05ZM10,13.5a3.46708,3.46708,0,0,1,.7375-2.126l4.8885,4.8885A3.483,3.483,0,0,1,10,13.5Zm6.2625,2.126L11.374,10.7375a3.483,3.483,0,0,1,4.8885,4.8885Z" />
		</svg>
	)
}
