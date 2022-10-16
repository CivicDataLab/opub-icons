import React from 'react'

export function CollectionExclude(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.542,14H7V9H8.4465A6.184,6.184,0,0,1,9.318,8H7V3h4V6.8845a6.09968,6.09968,0,0,1,1-.3425V3h4V6.8845a6.13724,6.13724,0,0,1,1,.562V2.5a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5H7.8845A6.09968,6.09968,0,0,1,7.542,14ZM6,14H2V9H6ZM6,8H2V3H6Z" />
			<path d="M13.5,8.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,8.05ZM10,12.5a3.46708,3.46708,0,0,1,.7375-2.126l4.8885,4.8885A3.483,3.483,0,0,1,10,12.5Zm6.2625,2.126L11.374,9.7375a3.483,3.483,0,0,1,4.8885,4.8885Z" />
		</svg>
	)
}
