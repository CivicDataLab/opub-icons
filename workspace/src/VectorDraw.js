import React from 'react'

export function VectorDraw(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.567,5.63,12.359,1.423a.534.534,0,0,0-.755,0L9.7455,3.281a.526.526,0,0,0-.0735.6445l4.21,4.21.004-.0085.093.0915a.533.533,0,0,0,.75378.00072l.00072-.00072,1.8335-1.833a.534.534,0,0,0-.00072-.75459Z" />
			<path d="M8.731,4.6915,4.7925,6.5055a1,1,0,0,0-.5055.5255L.9895,14.9865a.5.5,0,0,0,.108.545l.2615.2615,4.078-4.0785a.80975.80975,0,0,1-.0185-.127,1,1,0,1,1,1,1,.84221.84221,0,0,1-.138-.02L2.207,16.6415l.296.296a.5.5,0,0,0,.545.1085l7.9565-3.3a1,1,0,0,0,.525-.5055l1.814-3.938Z" />
		</svg>
	)
}