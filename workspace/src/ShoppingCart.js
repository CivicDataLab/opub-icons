import React from 'react'

export function ShoppingCart(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<ellipse cx="5.2225" cy="15.5715" rx="1.3335" ry="1.4585" />
			<ellipse cx="12.889" cy="15.5715" rx="1.3335" ry="1.4585" />
			<path d="M14.663,12H5.2345l.381-1.3H14a.6655.6655,0,0,0,.6535-.5355L16.987,3.83a.667.667,0,0,0-.654-.7975H16.27v-.015H3.25l-.6445-1.75A.6675.6675,0,0,0,1.9445.7H.6665a.667.667,0,0,0,0,1.3335h.703L4.3335,10l-.647,2.5375A.7845.7845,0,0,0,4.262,13.486q.03539.00867.07146.014h10.333a.7945.7945,0,0,0,.667-.8A.7.7,0,0,0,14.663,12ZM3.7645,4.4175H15.3l-1.8465,4.95H5.587Z" />
		</svg>
	)
}
