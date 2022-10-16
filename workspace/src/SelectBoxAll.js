import React from 'react'

export function SelectBoxAll(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14.6,4H6.4A2.4,2.4,0,0,0,4,6.4v8.2A2.4,2.4,0,0,0,6.4,17h8.2A2.4,2.4,0,0,0,17,14.6V6.4A2.4,2.4,0,0,0,14.6,4Zm.6115,4.5245L9.494,14.2865a.4.4,0,0,1-.5655,0l-3.14-3.139a.4.4,0,0,1,0-.5655L7.034,9.3365a.4.4,0,0,1,.5655,0L9.2115,10.95l4.189-4.235a.4.4,0,0,1,.5655,0l1.2455,1.2455A.4.4,0,0,1,15.2115,8.5245Z" />
			<path d="M13,1H3.4A2.4,2.4,0,0,0,1,3.4H1V13a2,2,0,0,0,2,2V3H15A2,2,0,0,0,13,1Z" />
		</svg>
	)
}
