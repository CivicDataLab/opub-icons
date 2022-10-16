import React from 'react'

export function BeakerCheck(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05Zm-1.169,7.156-2.064-2.064a.25.25,0,0,1,0-.3535l.518-.518a.25.25,0,0,1,.3535,0L12.504,14.636l3.053-3.053a.25.25,0,0,1,.3535,0l.5215.5215a.25.25,0,0,1,0,.3535l-3.75,3.75A.25.25,0,0,1,12.331,16.206Z" />
			<path d="M7.35,13.5a6.11448,6.11448,0,0,1,.67-2.7815L3.364,12.182,6,7.2265V2h4V7.227l.49.9125a6.11472,6.11472,0,0,1,.885-.405L11,7V2h.5a.5.5,0,0,0,.5-.5V.5a.5.5,0,0,0-.5-.5h-7A.5.5,0,0,0,4,.5v1a.5.5,0,0,0,.5.5H5V7L.464,15.8795A1.5,1.5,0,0,0,1.8295,18H9.318A6.126,6.126,0,0,1,7.35,13.5Z" />
		</svg>
	)
}
