import React from 'react'

export function ImageNext(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx="7.9" cy="6.6965" r="1.25" />
			<path d="M14.834,11.861,17.9,9,14.834,6.146A.5.5,0,0,0,14,6.5175V8H10.25a.25.25,0,0,0-.25.25v1.5a.25.25,0,0,0,.25.25H14v1.489a.5.5,0,0,0,.834.372Z" />
			<path d="M12.4375,3H.5625A.534.534,0,0,0,0,3.5v11a.534.534,0,0,0,.5625.5h11.875A.534.534,0,0,0,13,14.5V11H12v1a4.6501,4.6501,0,0,0-2.314-.92c-1.469,0-1.4465,1.0145-2.9165,1.0145s-1.637-2.219-3.1065-2.219C2.327,9.8755,1,12,1,12V4H12V7h1V3.5A.534.534,0,0,0,12.4375,3Z" />
		</svg>
	)
}
