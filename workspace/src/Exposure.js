import React from 'react'

export function Exposure(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3.085,3.633a7.90249,7.90249,0,0,0-1.7,7.779H5.6675Z" />
			<path d="M12.2575,1.7055A7.9215,7.9215,0,0,0,4.393,2.47L5.7145,6.453Z" />
			<path d="M16.971,9.577C16.986,9.386,17,9.195,17,9a7.97551,7.97551,0,0,0-3.229-6.406L10.5215,4.95Z" />
			<path d="M13.425,9.013l-2.503,7.741a8,8,0,0,0,5.724-5.431Z" />
			<path d="M9.155,16.992l1.284-3.972H2.0915A7.99,7.99,0,0,0,9,17C9.0525,17,9.1035,16.996,9.155,16.992Z" />
		</svg>
	)
}
