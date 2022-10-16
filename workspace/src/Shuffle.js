import React from 'react'

export function Shuffle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1.5,5H3.5555l1.325,2.0695,1.7-2.764L5.361,2.4025a1,1,0,0,0-.8-.4H1.5A.5.5,0,0,0,1,2.5v2A.5.5,0,0,0,1.5,5Z" />
			<path d="M13.6.103A.344.344,0,0,0,13.3525,0a.35.35,0,0,0-.35.35h0V2H10.5a1,1,0,0,0-.8.403L3.5555,12H1.5a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5H4.559a1,1,0,0,0,.8-.4L11.515,5H13V6.65a.35.35,0,0,0,.35.35.344.344,0,0,0,.245-.103L16.44,3.6625a.25.25,0,0,0,0-.325Z" />
			<path d="M13.6,10.103A.344.344,0,0,0,13.355,10a.35.35,0,0,0-.35.35V12h-1.49L10.1535,9.876,8.45,12.644,9.7,14.597a1,1,0,0,0,.8.403H13v1.65a.35.35,0,0,0,.35.35.344.344,0,0,0,.245-.103l2.8425-3.2345a.25.25,0,0,0,0-.325Z" />
		</svg>
	)
}
