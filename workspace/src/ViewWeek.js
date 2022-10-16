import React from 'react'

export function ViewWeek(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.5,3H15V1.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V3H6V1.5A.5.5,0,0,0,5.5,1h-1a.5.5,0,0,0-.5.5V3H1.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h16a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0,17.5,3ZM17,16H2V4H4v.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,6,4.5V4h7v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2Z" />
			<rect height={2} rx="0.25" width={11} x={4} y={7} />
		</svg>
	)
}
