import React from 'react'

export function Teapot(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.0235,5.5A5.55,5.55,0,0,0,9.686,3.932a1.1055,1.1055,0,0,0,.439-.8695,1.125,1.125,0,0,0-2.25,0,1.106,1.106,0,0,0,.503.9125A5.58053,5.58053,0,0,0,5.35,5.5Z" />
			<path d="M13.9095,7H4.2375A8.20818,8.20818,0,0,0,3.528,9.0795H3.5115C2.8615,8.811,2.95,8.591,2.397,7.153,2.0785,6.325,1.072,6.22.7055,6.1365a.369.369,0,0,0-.41.2045l-.223.446c-.1.2-.0095.5.215.517a.754.754,0,0,1,.642.3725,4.86785,4.86785,0,0,1,.274,1.0375,5.34009,5.34009,0,0,0,.79,2.4175A3.65,3.65,0,0,0,3.638,12.244a6.321,6.321,0,0,0,2.627,3.6425.76541.76541,0,0,0,.412.116H11.7a.765.765,0,0,0,.412-.116,6.265,6.265,0,0,0,2.4705-3.15c.05-.0175.1-.0345.144-.054a7.11256,7.11256,0,0,0,1.689-.992,3.883,3.883,0,0,0,1.461-3.096A2.3,2.3,0,0,0,13.9095,7Zm2.103,3.5455a4.09978,4.09978,0,0,1-1.083.7865A7.00336,7.00336,0,0,0,15,10.375a7.61777,7.61777,0,0,0-.4425-2.426,1.3296,1.3296,0,0,1,1.8245-.315C17.1835,8.3645,16.623,9.893,16.0125,10.5455Z" />
		</svg>
	)
}