import React from 'react'

export function Straighten(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx="3.5" cy="5.5" r="0.65" />
			<circle cx="13.5" cy="5.5" r="0.65" />
			<circle cx="8.5" cy="2.5" r="0.65" />
			<circle cx="5.5" cy="3.5" r="0.65" />
			<circle cx="11.5" cy="3.5" r="0.65" />
			<path d="M3,7H.25A.25.25,0,0,0,0,7.25v5.5A.25.25,0,0,0,.25,13H3Z" />
			<path d="M16.75,7H14v6h2.75a.25.25,0,0,0,.25-.25V7.25A.25.25,0,0,0,16.75,7Z" />
			<path d="M8.5,9c.9035,0,2.4915-.5,2.4915-1.4915L10.9825,7H6v.5205C6,8.5,7.59,9,8.5,9Z" />
			<path d="M12.05,7v.5c0,1.5-1.617,2.55-3.55,2.55S4.95,9,4.95,7.5V7H4v6h9V7Z" />
		</svg>
	)
}