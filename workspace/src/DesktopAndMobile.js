import React from 'react'

export function DesktopAndMobile(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5.5,15h-1a.4895.4895,0,0,0-.5.47877q-.00023.01062,0,.02123V16H9V11H2V2H14V3h2V.5a.5.5,0,0,0-.5-.5H.5A.5.5,0,0,0,0,.5v12a.5.5,0,0,0,.5.5H6v1.5A.5.5,0,0,1,5.5,15Z" />
			<path d="M17,4H11a1,1,0,0,0-1,1V17a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V5A1,1,0,0,0,17,4ZM13.5,5h1a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1ZM14,17.55a1.05,1.05,0,1,1,1.05-1.05A1.05,1.05,0,0,1,14,17.55ZM17,15H11V7h6Z" />
		</svg>
	)
}
