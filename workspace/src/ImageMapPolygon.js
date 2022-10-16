import React from 'react'

export function ImageMapPolygon(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.75,1h-3.5a.25.25,0,0,0-.25.25V3.456L10.9945,5.2365A.25.25,0,0,0,10.75,5H7.25A.25.25,0,0,0,7,5.25v.476L4,4.615V2.25A.25.25,0,0,0,3.75,2H.25A.25.25,0,0,0,0,2.25v3.5A.25.25,0,0,0,.25,6H2.1885L4.034,12H3.25a.25.25,0,0,0-.25.25v3.5a.25.25,0,0,0,.25.25h3.5A.25.25,0,0,0,7,15.75V14.465l5-.8335V14.75a.25.25,0,0,0,.25.25h3.5a.25.25,0,0,0,.25-.25v-3.5a.25.25,0,0,0-.25-.25h-.7245L15.95,5h1.8A.25.25,0,0,0,18,4.75V1.25A.25.25,0,0,0,17.75,1ZM8,6h2V8H8ZM3,5H1V3H3ZM6,15H4V13H6Zm6-3.75v1.368L7,13.45v-1.2A.25.25,0,0,0,6.75,12H5.081L3.2345,6H3.75A.25.25,0,0,0,4,5.75V5.6815l3,1.111V8.75A.25.25,0,0,0,7.25,9h3.5A.25.25,0,0,0,11,8.75V6.396l3-1.778V4.75a.25.25,0,0,0,.25.25h.686l-.923,6H12.25A.25.25,0,0,0,12,11.25ZM15,14H13V12h2ZM17,4H15V2h2Z" />
		</svg>
	)
}
