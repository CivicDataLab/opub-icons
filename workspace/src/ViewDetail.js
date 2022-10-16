import React from 'react'

export function ViewDetail(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.5955,16.0715,15.323,13.8A4.533,4.533,0,1,0,13.8,15.323l2.2725,2.2725a1.022,1.022,0,0,0,1.524,0A1.0975,1.0975,0,0,0,17.5955,16.0715ZM8.706,11.49a2.784,2.784,0,1,1,2.7845,2.7835H11.49A2.784,2.784,0,0,1,8.706,11.49Z" />
			<path d="M6.439,14H3V3H14V6.439a5.66153,5.66153,0,0,1,2,1.6545V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v14a.5.5,0,0,0,.5.5H8.094A5.6621,5.6621,0,0,1,6.439,14Z" />
		</svg>
	)
}
