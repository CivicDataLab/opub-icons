import React from 'react'

export function HotelBed(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.6,11H.4L3,7H15ZM0,12v2.5a.5.5,0,0,0,.5.5H2v.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,3,15.75V15H15v.75a.25.25,0,0,0,.25.25h.5a.25.25,0,0,0,.25-.25V15h1.5a.5.5,0,0,0,.5-.5V12ZM4,5.5A.5.5,0,0,1,4.5,5h3a.5.5,0,0,1,.5.5V6h2V5.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V6h1V3.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5V6H4Z" />
		</svg>
	)
}