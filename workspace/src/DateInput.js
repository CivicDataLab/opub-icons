import React from 'react'

export function DateInput(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16,8.4545h.643A.36049.36049,0,0,0,17,8.091V7.3635A.36049.36049,0,0,0,16.643,7h-.7655a1.41651,1.41651,0,0,0-1.0105.426L14,8.636l-.867-1.21A1.41651,1.41651,0,0,0,12.1225,7H11.357A.36049.36049,0,0,0,11,7.3635V8.091a.3605.3605,0,0,0,.357.364H12l1,1.5755V12.455H11.357a.3605.3605,0,0,0-.357.3635v.7275a.3605.3605,0,0,0,.357.3635H13V14.97l-1,1.5755h-.643a.3605.3605,0,0,0-.357.364V17.637a.36049.36049,0,0,0,.357.3635h.7655a1.41651,1.41651,0,0,0,1.0105-.426L14,16.364l.867,1.21A1.41651,1.41651,0,0,0,15.8775,18h.7655A.36049.36049,0,0,0,17,17.6365V16.909a.3605.3605,0,0,0-.357-.364H16L15,14.97V13.909h1.643A.36049.36049,0,0,0,17,13.5455V12.818a.36049.36049,0,0,0-.357-.3635H15V10.03Z" />
			<path d="M17,6h1V3.5a.5.5,0,0,0-.5-.5H15V1.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V3H6V1.5A.5.5,0,0,0,5.5,1h-1a.5.5,0,0,0-.5.5V3H1.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5H10v-.091A1.3585,1.3585,0,0,1,10.353,16H2V4H4v.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,6,4.5V4h7v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2Z" />
		</svg>
	)
}