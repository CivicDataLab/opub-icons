import React from 'react'

export function Trap(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.0955,3.4045a2.17885,2.17885,0,0,0-.5735-.3635A38.3083,38.3083,0,0,0,9.213.6265c-2.061-.2575-3.929,0-4.8955.966S3.995,5.2,4.897,7.068a37.60346,37.60346,0,0,0,2.0205,3.4945L1.331,16.15a1.0325,1.0325,0,0,0,.04444,1.4595l.00806.0075a1.033,1.033,0,0,0,1.45964.06031L2.851,17.67l5.0645-5.0655a1.85,1.85,0,0,0,1.345.491,4.484,4.484,0,0,0,1.6795-.384,13.42308,13.42308,0,0,0,3.6955-2.6055,13.354,13.354,0,0,0,2.576-3.666C17.7615,5.1065,17.7195,4.0285,17.0955,3.4045Zm-.8075,2.655a10.88906,10.88906,0,0,1-2.374,3.355,10.88691,10.88691,0,0,1-3.3545,2.374c-.9065.375-1.636.412-1.95.1s-.2735-1.039.1-1.95a10.88691,10.88691,0,0,1,2.374-3.3545A10.88691,10.88691,0,0,1,14.438,4.21a3.56663,3.56663,0,0,1,1.3-.3095.9.9,0,0,1,.65.209C16.7,4.422,16.662,5.15,16.288,6.0595Z" />
		</svg>
	)
}
