import React from 'react'

export function SQLQuery(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.70534,16.239l-2.51562-2.51563A4.267,4.267,0,1,0,13.755,15.158l2.51562,2.51562a.962.962,0,0,0,1.43471,0,1.00308,1.00308,0,0,0,.27772-.56045A1.01782,1.01782,0,0,0,17.70534,16.239ZM8.96112,11.55014A2.62066,2.62066,0,1,1,11.582,14.17056h-.00019A2.62066,2.62066,0,0,1,8.96112,11.55014ZM9,6c4.41827,0,8-1.1193,8-2.5S13.41827,1,9,1,1,2.11929,1,3.5,4.58173,6,9,6Zm5.14856.56238A5.64438,5.64438,0,0,1,16.6775,9.19824,1.03875,1.03875,0,0,0,17,8.5V5.135A5.36439,5.36439,0,0,1,14.14856,6.56238Zm-8.12329,4.257A5.609,5.609,0,0,1,8.158,7.1165C5.59961,7.00467,1.80066,6.40485,1,5.135V8.5C1,9.55173,3.08142,10.45028,6.02527,10.81942ZM5.9906,11.92691C3.8302,11.64711,1.59265,11.07584,1,10.1375V14.5C1,15.8805,4.58154,17,9,17c.38721,0,.76483-.01154,1.13733-.02814A5.61845,5.61845,0,0,1,5.9906,11.92691Z" />
		</svg>
	)
}
