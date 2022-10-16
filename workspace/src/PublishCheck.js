import React from 'react'

export function PublishCheck(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5955.5565.9,5.239a.25.25,0,0,0-.04.463L4.82,7.679Z" />
			<path d="M7.807,11.1775,5.04,9.625v3.8195a.3565.3565,0,0,0,.587.272L7.5085,12.132A6.10329,6.10329,0,0,1,7.807,11.1775Z" />
			<path d="M13.5,7.35a6.14976,6.14976,0,0,1,1.4135.1695l2.905-6.338L6.5445,8.5155l2.189,1.1A6.13651,6.13651,0,0,1,13.5,7.35Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05Zm-1.169,7.156-2.064-2.0635a.25.25,0,0,1,0-.3535l.518-.518a.25.25,0,0,1,.3535,0l1.3655,1.3655,3.053-3.053a.25.25,0,0,1,.3535,0l.5215.5215a.25.25,0,0,1,0,.3535l-3.75,3.75A.25.25,0,0,1,12.331,16.206Z" />
		</svg>
	)
}