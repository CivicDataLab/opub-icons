import React from 'react'

export function Visibility(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M12.3065,4.29A7.48591,7.48591,0,0,0,9,3.4685c-4.332,0-7.875,4.3125-7.875,5.7115,0,1.5,3.729,5.35,7.843,5.35,4.15,0,7.907-3.853,7.907-5.35C16.875,8,14.768,5.5095,12.3065,4.29ZM9,13.6125A4.6125,4.6125,0,1,1,13.6125,9,4.6125,4.6125,0,0,1,9,13.6125Z" />
			<path d="M10.3335,9.0415A1.3335,1.3335,0,0,1,9,7.7085a1.316,1.316,0,0,1,.675-1.135A2.46964,2.46964,0,0,0,9,6.469a2.5315,2.5315,0,1,0,2.5315,2.5315V9a2.35682,2.35682,0,0,0-.0875-.6A1.3125,1.3125,0,0,1,10.3335,9.0415Z" />
		</svg>
	)
}
