import React from 'react'

export function ColorPalette(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M11.807,3.0725c-2.1855-.35-4.503,0-4.824,1.046a1.146,1.146,0,0,0,.647,1.454A1.549,1.549,0,0,1,8.1995,7.843a1.41449,1.41449,0,0,1-1.5625.563C4.763,7.9325,2.6905,6.965.9945,8.5785-.55,10.05.079,12.233,1.577,13.421a11.7,11.7,0,0,0,7.2565,2.637c4.793,0,9.0665-2.8255,9.0665-6.558C17.9,5.721,14.316,3.4715,11.807,3.0725Zm-7.46,10.654a1.9,1.9,0,1,1,1.9-1.9A1.9,1.9,0,0,1,4.347,13.7265Zm9.643-8.017a1.25,1.25,0,1,1-1.25,1.25A1.25,1.25,0,0,1,13.99,5.7095Zm-5.351,9.07a1.7805,1.7805,0,1,1,1.7795-1.7825V13A1.78,1.78,0,0,1,8.639,14.7795Zm3.895-.748a1.5035,1.5035,0,1,1,1.501-1.507v.005A1.50249,1.50249,0,0,1,12.534,14.0315ZM15,11.28a1.3375,1.3375,0,1,1,1.337-1.338v.0005A1.337,1.337,0,0,1,15.0005,11.28Z" />
		</svg>
	)
}
