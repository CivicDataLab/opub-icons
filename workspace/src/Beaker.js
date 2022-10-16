import React from 'react'

export function Beaker(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.536,15.8795,12,7V2h.5a.5.5,0,0,0,.5-.5V.5a.5.5,0,0,0-.5-.5h-7A.5.5,0,0,0,5,.5v1a.5.5,0,0,0,.5.5H6V7L1.464,15.8795A1.5,1.5,0,0,0,2.8295,18h12.341a1.5,1.5,0,0,0,1.3655-2.1205ZM4.3635,12.182,7,7.227V2h4V7.2275L12.318,9.682Z" />
		</svg>
	)
}
