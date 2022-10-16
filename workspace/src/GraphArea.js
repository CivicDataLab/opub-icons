import React from 'react'

export function GraphArea(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15.1855,8.3715,17,12v4.5a.5.5,0,0,1-.5.5H1.5a.5.5,0,0,1-.5-.5V9l5,6,1.792-2.688a.25.25,0,0,1,.416,0L10,15l4.7585-6.662a.25.25,0,0,1,.427.0335Z" />
			<path d="M5.8845,12.83l1.034-1.55.0415-.062a1.25,1.25,0,0,1,2.08,0l.0415.062.9555,1.433,3.9055-5.4675.05-.0675a1.25,1.25,0,0,1,2.1355.1675l.037.074L17,9.0935V1L13,6,10.1955,3.1955a.25.25,0,0,0-.35355.00032L9.8255,3.214,3.9,10.45Z" />
		</svg>
	)
}
