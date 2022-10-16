import React from 'react'

export function DistributeSpaceHoriz(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={12} rx="0.5" width={5} x={2} y={5} />
			<rect height={8} rx="0.5" width={6} x={10} y={6} />
			<path d="M10,3.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,11,3.75V2h1.75A.25.25,0,0,0,13,1.75v-.5A.25.25,0,0,0,12.75,1H11V.25A.25.25,0,0,0,10.75,0h-.5A.25.25,0,0,0,10,.25V1H7V.25A.25.25,0,0,0,6.75,0h-.5A.25.25,0,0,0,6,.25V1H4.25A.25.25,0,0,0,4,1.25v.5A.25.25,0,0,0,4.25,2H6V3.75A.25.25,0,0,0,6.25,4h.5A.25.25,0,0,0,7,3.75V2h3Z" />
		</svg>
	)
}
