import React from 'react'

export function DocumentRefresh(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.19763,12.26283A4.44131,4.44131,0,0,1,16.948,10.71741l.62524-.62524a.24433.24433,0,0,1,.1748-.07373.25035.25035,0,0,1,.252.24875v2.50143a.25.25,0,0,1-.25.25l-2.4995-.00016A.25088.25088,0,0,1,15,12.76721v-.00054a.24436.24436,0,0,1,.07373-.175l.86988-.86987a3.02827,3.02827,0,0,0-5.29847.71808.48835.48835,0,0,1-.46081.30981H9.55908a.37949.37949,0,0,1-.36145-.48686Z" />
			<path d="M17.80237,14.77441A4.4413,4.4413,0,0,1,10.052,16.31982l-.62524.62524a.24429.24429,0,0,1-.1748.07373A.25036.25036,0,0,1,9,16.77V14.26863a.25.25,0,0,1,.25-.25l2.4995.00016A.25087.25087,0,0,1,12,14.27v.00052a.24434.24434,0,0,1-.07373.175l-.86988.86988a3.02828,3.02828,0,0,0,5.29847-.71808.48836.48836,0,0,1,.46081-.30982h.62525a.3795.3795,0,0,1,.36145.48687Z" />
			<path d="M7,13.5A6.5,6.5,0,0,1,13.5,7c.16883,0,.33447.01264.5.02527V5H9.5A.5.5,0,0,1,9,4.5V0H2.5A.5.5,0,0,0,2,.5v15a.5.5,0,0,0,.5.5H7.49981A6.4779,6.4779,0,0,1,7,13.5Z" />
			<path d="M10,0h.043a.5.5,0,0,1,.353.146L13.854,3.6A.5.5,0,0,1,14,3.957V4H10Z" />
		</svg>
	)
}
