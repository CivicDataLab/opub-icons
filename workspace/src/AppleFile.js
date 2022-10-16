import React from 'react'

export function AppleFile(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15.83,4H8.8545a1.17346,1.17346,0,0,1-.65-.1965L5.795,2.1965A1.17149,1.17149,0,0,0,5.146,2H2.17A1.17,1.17,0,0,0,1,3.17V13.83A1.17,1.17,0,0,0,2.17,15H15.83A1.17,1.17,0,0,0,17,13.83V5.17A1.17,1.17,0,0,0,15.83,4ZM2,5.75A.75.75,0,0,1,2.75,5h12.5a.75.75,0,0,1,.75.75V6H2Z" />
		</svg>
	)
}
