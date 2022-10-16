import React from 'react'

export function Flag(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.2915,2.927a9.51934,9.51934,0,0,0-2.0565.2265.54651.54651,0,0,1-.65-.542v-.807a.5435.5435,0,0,0-.4075-.5305A9.74611,9.74611,0,0,0,8.875,1,9.57707,9.57707,0,0,0,4,2.324V9.9065a9.55,9.55,0,0,1,4.88-1.323.55.55,0,0,1,.5365.55V11.003a.4955.4955,0,0,0,.703.454,9.63952,9.63952,0,0,1,6.2575-.7175.50351.50351,0,0,0,.623-.484V3.7a.5.5,0,0,0-.3755-.49A9.72033,9.72033,0,0,0,14.2915,2.927Z" />
			<rect height={17} rx="0.25" width={2} x={1} y={1} />
		</svg>
	)
}
