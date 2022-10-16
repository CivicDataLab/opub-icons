import React from 'react'

export function ExperienceAddTo(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10,13H6V11h4V10H6V8h8V9h2V1.5a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5H10ZM2,3H14V7H2ZM5,13H2V8H5Z" />
			<path d="M17.697,14.5255,15.7785,12.607l2.15-2.1815A.25.25,0,0,0,17.75,10H11v6.747a.25.25,0,0,0,.427.179l2.165-2.1325,1.9185,1.9185a.5.5,0,0,0,.707,0l1.48-1.4795A.5.5,0,0,0,17.697,14.5255Z" />
		</svg>
	)
}
