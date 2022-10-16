import React from 'react'

export function Visit(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.5,2H1.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5H2.657a4.49752,4.49752,0,0,1,.9745-1H2V5H16v9H14.2815a4.72636,4.72636,0,0,1,1.012,1H16.5a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,16.5,2Z" />
			<path d="M10.6065,13.5255v-.837a.5795.5795,0,0,1,.1475-.3735,4.421,4.421,0,0,0,1.005-2.7585c0-2.0875-1.107-3.254-2.78-3.254S6.1675,7.515,6.1675,9.5565A4.468,4.468,0,0,0,7.221,12.315a.5795.5795,0,0,1,.1475.3735v.8335a.575.575,0,0,1-.5.58c-3.361.2925-3.8635,2.5915-3.8635,3.5,0,.1-.0035.4-.0035.4H15v-.4c0-.869-.5935-3.16-3.894-3.495A.5775.5775,0,0,1,10.6065,13.5255Z" />
		</svg>
	)
}
