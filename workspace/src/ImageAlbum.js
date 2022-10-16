import React from 'react'

export function ImageAlbum(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx="13.25" cy="6.75" r="1.25" />
			<path d="M16.5,3H1.5a.5.5,0,0,0-.5.5V5H.5a.5.5,0,0,0-.5.5v1A.5.5,0,0,0,.5,7H1v4H.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H1v1.5a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0,16.5,3ZM3,12.5a.5.5,0,0,1-.5.5H2V11h.5a.5.5,0,0,1,.5.5Zm0-6a.5.5,0,0,1-.5.5H2V5h.5a.5.5,0,0,1,.5.5Zm13,6.374-2.2595-2.2595a.8565.8565,0,0,0-1.21127-.00073l-.00073.00073-1.3165,1.316L7.974,8.692a.858.858,0,0,0-1.2125,0L4,11.454V4H16Z" />
		</svg>
	)
}
