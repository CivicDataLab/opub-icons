import React from 'react'

export function TreeView(props) {
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
				data-name="Rectangle 12"
				height={3}
				id="Rectangle_12"
				rx="0.5"
				width={3}
				x={1}
				y={1}
			/>
			<rect
				data-name="Rectangle 13"
				height={2}
				id="Rectangle_13"
				rx="0.25"
				width={12}
				x={5}
				y={2}
			/>
			<rect
				data-name="Rectangle 14"
				height={2}
				id="Rectangle_14"
				rx="0.25"
				width={8}
				x={9}
				y={8}
			/>
			<rect
				data-name="Rectangle 15"
				height={2}
				id="Rectangle_15"
				rx="0.25"
				width={8}
				x={9}
				y={14}
			/>
			<rect
				data-name="Rectangle 16"
				height={3}
				id="Rectangle_16"
				rx="0.5"
				width={3}
				x={5}
				y={7}
			/>
			<rect
				data-name="Rectangle 17"
				height={3}
				id="Rectangle_17"
				rx="0.5"
				width={3}
				x={5}
				y={13}
			/>
		</svg>
	)
}
