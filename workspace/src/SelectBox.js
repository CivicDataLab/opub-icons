import React from 'react'

export function SelectBox(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.6,1H3.4A2.4,2.4,0,0,0,1,3.4H1V14.6A2.4,2.4,0,0,0,3.4,17H14.6A2.4,2.4,0,0,0,17,14.6V3.4A2.4,2.4,0,0,0,14.6,1Zm-.1775,5.1885L7.283,13.3275a.4.4,0,0,1-.5655,0l-3.14-3.139a.4.4,0,0,1,0-.5655L4.823,8.3775a.4.4,0,0,1,.5655,0L7,9.99l5.6115-5.6125a.4.4,0,0,1,.5655,0L14.4225,5.623A.4.4,0,0,1,14.4225,6.1885Z" />
		</svg>
	)
}
