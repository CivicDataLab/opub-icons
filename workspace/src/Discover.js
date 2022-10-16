import React from 'react'

export function Discover(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			id="icons"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<g>
				<path d="M9,17.1A8.1,8.1,0,1,0,.9,9,8.1,8.1,0,0,0,9,17.1ZM5.234,5.0752a.23679.23679,0,0,1,.07336.01171L10.89893,6.8833a.47186.47186,0,0,1,.30358.30127l1.78443,5.41187a.236.236,0,0,1-.22266.30981.24132.24132,0,0,1-.06836-.01l-5.57238-1.655a.47142.47142,0,0,1-.31434-.30664L5.011,5.384A.23618.23618,0,0,1,5.234,5.0752Z" />
			</g>
			<polygon points="7.754 10.281 10.258 7.833 6.578 6.65 7.754 10.281" />
		</svg>
	)
}
