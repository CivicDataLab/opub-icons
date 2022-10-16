import React from 'react'

export function Erase(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.3065,14.066a.5.5,0,0,0,.707,0l6.781-6.7805a.5.5,0,0,0,0-.707L11.1375.9215a.5.5,0,0,0-.707,0L3.65,7.7a.5.5,0,0,0,0,.707l.3535.3535-3.15,3.15a1,1,0,0,0-.00029,1.41421L.8535,13.325l3.2525,3.25A1.4,1.4,0,0,0,5.0665,17H16.75a.25.25,0,0,0,.25-.25v-.5a.25.25,0,0,0-.25-.25H6.6655L8.953,13.7125ZM5.45,15.8035a.5.5,0,0,1-.707,0l-3.184-3.182,3.15-3.15L8.2445,13.007Z" />
		</svg>
	)
}
