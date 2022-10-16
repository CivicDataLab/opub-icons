import React from 'react'

export function ConversionFunnel(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5,12v5.5a.5.5,0,0,0,.5.5h6a.5.5,0,0,0,.5-.5V12Zm5.9875,2.1L8.461,17.469a.1875.1875,0,0,1-.26252.03734l-.02-.01734L6.35,15.663a.18751.18751,0,0,1,0-.265l.8-.798a.18751.18751,0,0,1,.265,0l.756.756L9.7875,13.2a.1875.1875,0,0,1,.2625-.0375l.9.675a.1875.1875,0,0,1,.0375.2625Z" />
			<polygon points="14.5 6 2.5 6 4.583 11 12.417 11 14.5 6" />
			<path d="M16.625,0H.375A.25.25,0,0,0,.144.346L2.0835,5h12.833L16.856.346A.25.25,0,0,0,16.625,0Z" />
		</svg>
	)
}
