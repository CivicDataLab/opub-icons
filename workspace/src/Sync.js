import React from 'react'

export function Sync(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M10.5,8a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5H5V1.8675A.3665.3665,0,0,0,4.63451,1.5h-.004a.359.359,0,0,0-.2565.108L.0945,5.508a.36751.36751,0,0,0,0,.492L4.374,10.392a.359.359,0,0,0,.2565.108A.3665.3665,0,0,0,5,10.13651V8Z" />
			<path d="M17.9055,12,13.626,7.608a.359.359,0,0,0-.2565-.108A.3665.3665,0,0,0,13,7.86349V10H7.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5H13v2.1325a.3665.3665,0,0,0,.36549.36751h.004a.359.359,0,0,0,.2565-.108l4.2795-3.9A.36751.36751,0,0,0,17.9055,12Z" />
		</svg>
	)
}
