import React from 'react'

export function VisitShare(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M1,4H14V5.355l1,1.1065V1.5a.5.5,0,0,0-.5-.5H.5a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5H1.577A4.13308,4.13308,0,0,1,2.7,12H1Z" />
			<path d="M15.861,9.1655,13,6,10.146,9.1655A.5.5,0,0,0,10.5175,10H12v3.75a.25.25,0,0,0,.25.25h1.5a.25.25,0,0,0,.25-.25V10h1.4895a.5.5,0,0,0,.3715-.8345Z" />
			<path d="M2,16l5-.004V11a1,1,0,0,1,1-1H9.1165a1.494,1.494,0,0,1,.287-1.504l.6085-.675c-.087-1.75-1.066-2.7315-2.527-2.7315-1.531,0-2.5735,1.1095-2.5735,2.978a4.0895,4.0895,0,0,0,.964,2.5245.53048.53048,0,0,1,.135.342v.7625a.5265.5265,0,0,1-.459.531c-3.076.2675-3.5425,2.4395-3.5425,3.269Z" />
			<path d="M16,11v5H10V11H8.5a.5.5,0,0,0-.5.5v6a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-6a.5.5,0,0,0-.5-.5Z" />
		</svg>
	)
}