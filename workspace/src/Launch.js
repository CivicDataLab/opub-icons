import React from 'react'

export function Launch(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.489.1885A17.36351,17.36351,0,0,0,4.793,10.995a.261.261,0,0,0,.0625.2725l1.876,1.8755a.261.261,0,0,0,.2705.0635A17.214,17.214,0,0,0,17.8095.509.272.272,0,0,0,17.489.1885Z" />
			<path d="M3.9,9.574H.45a.262.262,0,0,1-.23-.3915C1.0105,7.8045,3.96,3.26,8.424,3.26,7.388,4.2955,3.981,8.7845,3.9,9.574Z" />
			<path d="M8.424,14.1v3.454a.262.262,0,0,0,.3895.2305c1.376-.777,5.9245-3.688,5.9245-8.2095C13.7,10.61,9.213,14.017,8.424,14.1Z" />
		</svg>
	)
}
