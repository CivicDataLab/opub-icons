import React from 'react'

export function VerticalMasonryGridView(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			data-name="I C O N S"
			id="I_C_O_N_S"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect
				data-name="Rectangle 10"
				height={5}
				id="Rectangle_10"
				rx="0.5"
				width={16}
				x={1}
				y={1}
			/>
			<rect
				data-name="Rectangle 11"
				height={9}
				id="Rectangle_11"
				rx="0.5"
				width={16}
				x={1}
				y={8}
			/>
		</svg>
	)
}
