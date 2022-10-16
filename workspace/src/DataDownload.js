import React from 'react'

export function DataDownload(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<ellipse cx={9} cy="3.5" rx={8} ry="2.5" />
			<path d="M5.3885,12.5895a1.211,1.211,0,0,1-.314-.8C3.2305,11.478,1.509,10.942,1,10.135V14.5C1,15.8805,4.582,17,9,17c.1385,0,.2735-.0045.4105-.0065Z" />
			<path d="M16.5,6.5V9.3635A1.18,1.18,0,0,0,17,8.5V5.135A5.06144,5.06144,0,0,1,14.3855,6.5Z" />
			<path d="M6.315,10.5H8.5V7.13C5.953,7.059,1.8365,6.4625,1,5.135V8.5c0,.996,1.868,1.8535,4.565,2.255A1.21847,1.21847,0,0,1,6.315,10.5Z" />
			<path d="M17.573,12.427A.25.25,0,0,0,17.3965,12H15V8H10v4H7.6035a.25.25,0,0,0-.1765.427L12.5,18Z" />
		</svg>
	)
}
