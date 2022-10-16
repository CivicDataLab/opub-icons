import React from 'react'

export function Ellipse(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9,2.9655c4.4415,0,8.055,2.707,8.055,6.0345S13.4415,15.0345,9,15.0345.945,12.3275.945,9,4.5585,2.9655,9,2.9655ZM9,2.075C4.057,2.075.05,5.1755.05,9S4.057,15.925,9,15.925,17.95,12.8245,17.95,9,13.943,2.075,9,2.075Z" />
		</svg>
	)
}
