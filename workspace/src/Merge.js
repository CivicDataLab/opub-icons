import React from 'react'

export function Merge(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.6,5.103A.344.344,0,0,0,13.355,5a.35.35,0,0,0-.35.35h0V7H9V2.5A.5.5,0,0,0,8.5,2h-7a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5H6v7H1.5a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5V10h4v1.65a.35.35,0,0,0,.35.35.344.344,0,0,0,.245-.103l2.8425-3.2345a.25.25,0,0,0,0-.325Z" />
		</svg>
	)
}
