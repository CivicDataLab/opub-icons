import React from 'react'

export function GraphHistogram(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.75,15h-1.5a.25.25,0,0,0-.25.25v-2a.25.25,0,0,0-.25-.25h-1.5a.25.25,0,0,0-.25.25v-3a.25.25,0,0,0-.25-.25h-1.5a.25.25,0,0,0-.25.25v-4A.25.25,0,0,0,10.75,6H9.25A.25.25,0,0,0,9,6.25V3.2595A.2595.2595,0,0,0,8.7405,3H7.2595A.2595.2595,0,0,0,7,3.2595V5.25A.25.25,0,0,0,6.75,5H5.25A.25.25,0,0,0,5,5.25v5A.25.25,0,0,0,4.75,10H3.25a.25.25,0,0,0-.25.25v4A.25.25,0,0,0,2.75,14H1.25a.25.25,0,0,0-.25.25V17H17V15.25A.25.25,0,0,0,16.75,15Z" />
		</svg>
	)
}
