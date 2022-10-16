import React from 'react'

export function CloudOutline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10.25,3.357A3.394,3.394,0,0,1,13.519,7.66a2.74688,2.74688,0,0,1,.3025-.017,2.6785,2.6785,0,0,1,0,5.357H3.107a1.6075,1.6075,0,0,1,0-3.2145h.1795v-.714a2.859,2.859,0,0,1,3.6-2.7595A3.394,3.394,0,0,1,10.25,3.357Zm0-1A4.4055,4.4055,0,0,0,6.1335,5.2145a3.862,3.862,0,0,0-3.845,3.703A2.607,2.607,0,0,0,3.107,14H13.8215a3.6785,3.6785,0,0,0,.8215-7.2645A4.4,4.4,0,0,0,10.25,2.357Z" />
		</svg>
	)
}