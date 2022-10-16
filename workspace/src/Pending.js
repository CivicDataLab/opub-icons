import React from 'react'

export function Pending(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10,8.043V3.5A.5.5,0,0,0,9.5,3h-1a.5.5,0,0,0-.5.5V8.793a.5.5,0,0,0,.1465.3535L10.95,11.95a.5.5,0,0,0,.70711.00039L11.6575,11.95l.6675-.6675a.5.5,0,0,0,.00039-.70711L12.325,10.575,10.1465,8.3965A.5.5,0,0,1,10,8.043Z" />
			<path d="M13.2425,3.45a7.08135,7.08135,0,0,1,1.313,1.3l.8715-.5a8.08636,8.08636,0,0,0-1.6825-1.668Z" />
			<path d="M16.9465,8.1a7.98218,7.98218,0,0,0-.6135-2.2945l-.871.503A6.98813,6.98813,0,0,1,15.9355,8.1Z" />
			<path d="M12.188,1.6785A7.993,7.993,0,0,0,9.9,1.0555V2.067a7.05663,7.05663,0,0,1,1.786.481Z" />
			<path d="M15.936,9.9A6.997,6.997,0,1,1,8.1,2.064V1.0535A8,8,0,1,0,16.946,9.9Z" />
		</svg>
	)
}