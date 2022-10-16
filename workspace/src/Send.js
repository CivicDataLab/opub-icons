import React from 'react'

export function Send(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5955,2.5565.9,7.239a.25.25,0,0,0-.0405.4635L4.82,9.679Z" />
			<path d="M6.5445,10.516l5.9685,3a.5.5,0,0,0,.67121-.22243l.00029-.00057L17.818,3.182Z" />
			<path d="M5.04,11.625v3.8195a.3565.3565,0,0,0,.587.272l2.68-2.258Z" />
		</svg>
	)
}
