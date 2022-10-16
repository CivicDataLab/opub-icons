import React from 'react'

export function PinOff(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="5.823 10.999 7.012 12.189 1.962 17.203 0 18 0.822 16.013 5.823 10.999" />
			<path d="M11.9775,13.1605,12,10.1445,16.1465,6l1.135-.0115a.7262.7262,0,0,0,.505-1.2395L15.5205,2.48,13.25.2415A.723.723,0,0,0,12.0155.747L12,1.854,7.8535,6,4.841,6.022a.72345.72345,0,0,0-.554,1.233l.001.001,3.2295,3.229,3.2285,3.2295a.721.721,0,0,0,1.2315-.554Z" />
		</svg>
	)
}
