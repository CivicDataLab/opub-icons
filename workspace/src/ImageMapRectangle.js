import React from 'react'

export function ImageMapRectangle(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.75,5A.25.25,0,0,0,17,4.75V1.25A.25.25,0,0,0,16.75,1h-3.5a.25.25,0,0,0-.25.25V2H5V1.25A.25.25,0,0,0,4.75,1H1.25A.25.25,0,0,0,1,1.25v3.5A.25.25,0,0,0,1.25,5H2v8H1.25a.25.25,0,0,0-.25.25v3.5a.25.25,0,0,0,.25.25h3.5A.25.25,0,0,0,5,16.75V16h8v.75a.25.25,0,0,0,.25.25h3.5a.25.25,0,0,0,.25-.25v-3.5a.25.25,0,0,0-.25-.25H16V5ZM2,2H4V4H2ZM4,16H2V14H4Zm9-2.75V15H5V13.25A.25.25,0,0,0,4.75,13H3V5H4.75A.25.25,0,0,0,5,4.75V3h8V4.75a.25.25,0,0,0,.25.25H15v8H13.25A.25.25,0,0,0,13,13.25ZM16,16H14V14h2ZM14,4V2h2V4Z" />
		</svg>
	)
}
