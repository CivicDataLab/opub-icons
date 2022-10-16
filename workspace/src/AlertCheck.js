import React from 'react'

export function AlertCheck(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.35,13.5a6.19477,6.19477,0,0,1,.1095-1.139h-.568a.2025.2025,0,0,1-.2-.2025V10.942a.203.203,0,0,1,.2-.203H8.01A6.161,6.161,0,0,1,11.4645,7.7L7.854,1.241a.4055.4055,0,0,0-.708,0L.3625,13.38a.4055.4055,0,0,0,.354.6035h6.658C7.362,13.8235,7.35,13.663,7.35,13.5ZM6.689,4.859a.203.203,0,0,1,.2-.203H8.106a.203.203,0,0,1,.2025.203V9.7255a.2025.2025,0,0,1-.2025.2025H6.8915a.2025.2025,0,0,1-.2-.2025Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05Zm-1.169,7.156-2.064-2.0635a.25.25,0,0,1,0-.3535l.5185-.5185a.25.25,0,0,1,.3535,0l1.3655,1.3655,3.053-3.053a.25.25,0,0,1,.3535,0l.5215.5215a.25.25,0,0,1,0,.3535l-3.75,3.75A.25.25,0,0,1,12.331,16.206Z" />
		</svg>
	)
}
