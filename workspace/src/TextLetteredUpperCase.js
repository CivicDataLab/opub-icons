import React from 'react'

export function TextLetteredUpperCase(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={11} x={7} y={2} />
			<rect height={2} rx="0.5" width={11} x={7} y={8} />
			<rect height={2} rx="0.5" width={11} x={7} y={14} />
			<path d="M1,6.092c0-.0535.0075-.069.046-.0765C1.3825,6.0075,2.0255,6,2.676,6,4.2605,6,4.6,6.6965,4.6,7.3165A1.10751,1.10751,0,0,1,3.87,8.388v.0155A1.1805,1.1805,0,0,1,4.7885,9.559c0,.95-.819,1.439-2.212,1.439-.589.0075-1.209-.0075-1.523-.0155A.061.061,0,0,1,.99981,10.915L1,10.9135ZM2.064,8.013H2.73c.612,0,.8035-.25.8035-.5815,0-.4135-.2755-.582-.865-.582-.3,0-.5355.0075-.6045.0155Zm0,2.12c.084,0,.26.0155.574.0155.643,0,1.0255-.1685,1.0255-.643,0-.4-.245-.6275-.926-.6275H2.064Z" />
			<path d="M5.413,4.923C4.8425,3.35,4.2265,1.587,3.664.0385A.058.058,0,0,0,3.6,0H2.362a.05.05,0,0,0-.054.04565V.054a1.38192,1.38192,0,0,1-.077.4775c-.4855,1.333-1.14,3.228-1.55,4.384C.6655,4.969.681,5,.7425,5h.926a.0835.0835,0,0,0,.0925-.0695L2,4H4l.2725.946A.069.069,0,0,0,4.35,5H5.367C5.4205,5,5.436,4.977,5.413,4.923ZM2.978.909h.008c.128.461.595,1.5875.8245,2.2155L2.278,3.13C2.5,2.4605,2.8805,1.35,2.978.909Z" />
			<path d="M3.821,12a2.84985,2.84985,0,0,1,1.05.1565c.0375.0225.045.0375.045.09v.791c0,.067-.0375.067-.0675.05a2.52254,2.52254,0,0,0-.9925-.1865,1.491,1.491,0,0,0-1.6175,1.584A1.465,1.465,0,0,0,3.85,16.05a3.03051,3.03051,0,0,0,1.045-.179c.0375-.015.0595,0,.0595.045v.7685c0,.0525-.0075.082-.0595.1045A3.07494,3.07494,0,0,1,3.664,17,2.31467,2.31467,0,0,1,1.15,14.515,2.48485,2.48485,0,0,1,3.821,12Z" />
		</svg>
	)
}
