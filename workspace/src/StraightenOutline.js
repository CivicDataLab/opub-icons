import React from 'react'

export function StraightenOutline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.75,7H.25A.25.25,0,0,0,0,7.25v6.5A.25.25,0,0,0,.25,14h16.5a.25.25,0,0,0,.25-.25V7.25A.25.25,0,0,0,16.75,7ZM11.107,8l.009.484c0,1.041-1.666,1.566-2.616,1.566S5.875,9.525,5.875,8.4965V8ZM3,13H1V8H3Zm10,0H4V8H5v.5C5,10,6.567,11,8.5,11S12,10,12,8.5V8h1Zm3,0H14V8h2Z" />
			<circle cx="3.5" cy="5.5" r="0.65" />
			<circle cx="13.5" cy="5.5" r="0.65" />
			<circle cx="8.5" cy="2.5" r="0.65" />
			<circle cx="5.5" cy="3.5" r="0.65" />
			<circle cx="11.5" cy="3.5" r="0.65" />
		</svg>
	)
}
