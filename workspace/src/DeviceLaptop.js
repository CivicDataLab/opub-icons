import React from 'react'

export function DeviceLaptop(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.974,15.342,16,10V2.5a.5.5,0,0,0-.5-.5H2.5a.5.5,0,0,0-.5.5V10L.026,15.342A.50548.50548,0,0,0,0,15.5a.5.5,0,0,0,.5.5h17a.5.5,0,0,0,.5-.5A.50548.50548,0,0,0,17.974,15.342ZM6,15l.6665-2h4.667L12,15Zm9-5H3V3H15Z" />
		</svg>
	)
}
