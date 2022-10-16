import React from 'react'

export function Preview(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5955,16.0715,14.323,13.8A4.5325,4.5325,0,1,0,12.8,15.323l2.273,2.2725a1.022,1.022,0,0,0,1.524,0A1.06653,1.06653,0,0,0,16.8905,17,1.08151,1.08151,0,0,0,16.5955,16.0715ZM7.706,11.49a2.784,2.784,0,1,1,2.784,2.784A2.784,2.784,0,0,1,7.706,11.49Z" />
			<path d="M16.5,2H1.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5H7.116a5.66068,5.66068,0,0,1-1.034-1H2V5H16v8.8885l1,.995V2.5A.5.5,0,0,0,16.5,2Z" />
		</svg>
	)
}
