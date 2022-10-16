import React from 'react'

export function Individual(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height="3.5" rx="0.5" width="3.5" x="7.25" y="7.25" />
			<path d="M14.75,6A.25.25,0,0,0,15,5.75V3.25A.25.25,0,0,0,14.75,3h-2.5a.25.25,0,0,0-.25.25V4H6V3.25A.25.25,0,0,0,5.75,3H3.25A.25.25,0,0,0,3,3.25v2.5A.25.25,0,0,0,3.25,6H4v6H3.25a.25.25,0,0,0-.25.25v2.5a.25.25,0,0,0,.25.25h2.5A.25.25,0,0,0,6,14.75V14h6v.75a.25.25,0,0,0,.25.25h2.5a.25.25,0,0,0,.25-.25v-2.5a.25.25,0,0,0-.25-.25H14V6ZM13,12h-.75a.25.25,0,0,0-.25.25V13H6v-.75A.25.25,0,0,0,5.75,12H5V6h.75A.25.25,0,0,0,6,5.75V5h6v.75a.25.25,0,0,0,.25.25H13Z" />
		</svg>
	)
}