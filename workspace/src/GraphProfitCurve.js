import React from 'react'

export function GraphProfitCurve(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1.2565,1.003A.255.255,0,0,0,1,1.25649V1.757a.25.25,0,0,0,.246.2465A14.035,14.035,0,0,1,11.018,6H10V7h1.945a15.46849,15.46849,0,0,1,3.55,9.756.247.247,0,0,0,.2465.245h.5a.254.254,0,0,0,.25351-.25449V16.745C16.3725,8.3955,10.154,1.14,1.2565,1.003Z" />
			<rect height={2} width={1} x={11} y={14} />
			<rect height={2} width={1} x={11} y={11} />
			<rect height={2} width={1} x={11} y={8} />
			<rect height={1} width={2} x={7} y={6} />
			<rect height={1} width={2} x={4} y={6} />
			<rect height={1} width={2} x={1} y={6} />
		</svg>
	)
}
