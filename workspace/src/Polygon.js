import React from 'react'

export function Polygon(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.305,8.765,13.471,2.2825A.5385.5385,0,0,0,13,2H5.023a.53849.53849,0,0,0-.473.2805L.696,8.7305a.53952.53952,0,0,0,0,.515L4.55,15.719A.53951.53951,0,0,0,5.023,16H13a.539.539,0,0,0,.4735-.2815l3.833-6.4405A.53951.53951,0,0,0,17.305,8.765ZM12.7235,15H5.3L1.694,8.99,5.2965,3H12.722l3.5845,6.02Z" />
		</svg>
	)
}
