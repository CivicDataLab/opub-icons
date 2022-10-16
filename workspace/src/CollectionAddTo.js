import React from 'react'

export function CollectionAddTo(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10,14H7V9h3V8H7V3h4V7h1V3h4V7h1V2.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5H10ZM6,14H2V9H6ZM6,8H2V3H6Z" />
			<path d="M17.697,12.5255,15.7785,10.607l2.15-2.1815A.25.25,0,0,0,17.75,8H11v6.747a.25.25,0,0,0,.427.179l2.165-2.1325,1.9185,1.9185a.5.5,0,0,0,.707,0l1.48-1.4795A.5.5,0,0,0,17.697,12.5255Z" />
		</svg>
	)
}
