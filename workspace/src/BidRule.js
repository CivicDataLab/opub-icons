import React from 'react'

export function BidRule(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect
				height="4.2425"
				transform="translate(-0.72795 10.24229) rotate(-45)"
				width="4.2425"
				x="9.87832"
				y="3.87861"
			/>
			<rect
				height="1.5775"
				rx="0.3945"
				transform="translate(-1.97264 13.24572) rotate(-44.995)"
				width="6.3095"
				x="11.8499"
				y="8.21559"
			/>
			<rect
				height="1.5775"
				rx="0.3945"
				transform="translate(0.50939 7.25312) rotate(-44.995)"
				width="6.3095"
				x="5.85631"
				y="2.22285"
			/>
			<path d="M2.03,17.03.97,15.97a.75.75,0,0,1-.00034-1.06066L.97,14.909,9,7.5,10.5,9,3.091,17.03a.75.75,0,0,1-1.06066.00034Z" />
			<path d="M17,15v-.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V15h-.75a.25.25,0,0,0-.25.25v1.5a.25.25,0,0,0,.25.25h7.5a.25.25,0,0,0,.25-.25v-1.5a.25.25,0,0,0-.25-.25Z" />
		</svg>
	)
}
