import React from 'react'

export function Flashlight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.653,9.33l2.9865-2.987a.5.5,0,0,0,0-.707l-4.262-4.2625a.5.5,0,0,0-.707,0L8.6835,4.36a.5.5,0,0,0-.143.2965l-.234,2.039L1.373,13.6285a.5.5,0,0,0,0,.707l2.305,2.305a.5.5,0,0,0,.707,0L11.318,9.707l2.0385-.234A.5.5,0,0,0,13.653,9.33Zm-5.176.206a1.375,1.375,0,1,1,1.94454,0l0,0A1.375,1.375,0,0,1,8.477,9.536Z" />
		</svg>
	)
}
