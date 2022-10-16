import React from 'react'

export function CheckPause(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11.55,7.6715,14.7455,3.564a.5.5,0,0,0-.0875-.7l-.7295-.568a.5.5,0,0,0-.7.0875L6.411,11.1415,3.0875,7.8355a.5.5,0,0,0-.707,0L1.7185,8.5a.5.5,0,0,0-.00039.70711l.00039.00039,4.463,4.45a.5.5,0,0,0,.75-.0465l.444-.571A6.147,6.147,0,0,1,11.55,7.6715Z" />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05ZM13,15.787H11.684V11.213H13Zm2.316,0H14V11.213h1.316Z" />
		</svg>
	)
}
