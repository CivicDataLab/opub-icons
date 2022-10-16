import React from 'react'

export function Placeholder(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<g data-name="i c o n s" id="i_c_o_n_s">
				<circle cx={9} cy={9} r={8} />
			</g>
		</svg>
	)
}
