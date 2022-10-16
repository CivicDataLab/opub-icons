import React from 'react'

export function ChevronUpDown(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M14,5.99a1,1,0,0,1-1.7055.7055L9.006,3.409,5.717,6.695A1,1,0,0,1,4.28,5.3085l.0245-.0245L8.3,1.2925a1,1,0,0,1,1.4125,0L13.707,5.284A.99446.99446,0,0,1,14,5.99Z" />
			<path d="M4,12.01a1,1,0,0,1,1.7055-.7055l3.289,3.286,3.289-3.286a1,1,0,0,1,1.437,1.3865l-.0245.0245L9.7,16.707a1,1,0,0,1-1.4125,0L4.293,12.7155A.99452.99452,0,0,1,4,12.01Z" />
		</svg>
	)
}
