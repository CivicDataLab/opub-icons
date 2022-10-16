import React from 'react'

export function EditIn(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.55,15H3V3H15V6.784a1.64966,1.64966,0,0,1,.3215-.035,1.836,1.836,0,0,1,1.2625.518L17,7.683V1.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5H6.886Z" />
			<path d="M17.8225,10.3425,15.6605,8.181a.54151.54151,0,0,0-.339-.1325.565.565,0,0,0-.35.15l-5.616,5.621a.368.368,0,0,0-.094.1575l-1.222,3.67c-.0425.141.1725.319.294.319l.023-.0025c.1035-.024,3.13-1.059,3.672-1.222a.36653.36653,0,0,0,.155-.0935L17.8,11.0295a.515.515,0,0,0,.15-.331A.458.458,0,0,0,17.8225,10.3425Zm-8.803,6.644.989-2.7595,1.77,1.7655C10.968,16.236,9.7195,16.7775,9.0195,16.9865Z" />
		</svg>
	)
}
