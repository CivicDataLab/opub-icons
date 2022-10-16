import React from 'react'

export function Unmerge(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.6,10.103A.344.344,0,0,0,13.355,10a.35.35,0,0,0-.35.35V12H10V5h3V6.65a.35.35,0,0,0,.35.35.344.344,0,0,0,.245-.103L16.44,3.6625a.25.25,0,0,0,0-.325L13.6.103A.344.344,0,0,0,13.3525,0a.35.35,0,0,0-.35.35h0V2H7.5a.5.5,0,0,0-.5.5V7H1.5a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5H7v4.5a.5.5,0,0,0,.5.5H13v1.65a.35.35,0,0,0,.35.35.344.344,0,0,0,.245-.103l2.8425-3.2345a.25.25,0,0,0,0-.325Z" />
		</svg>
	)
}
