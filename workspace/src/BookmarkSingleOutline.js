import React from 'react'

export function BookmarkSingleOutline(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13,2V15.75L9.739,12.4885l-.706-.7055-.708.7055L5,15.8,5.0055,2Zm.5-1H4.506a.5.5,0,0,0-.5.5L4,17.7755c0,.144.05.2215.1315.2215a.25852.25852,0,0,0,.1615-.081l4.738-4.719,4.6875,4.688a.244.244,0,0,0,.159.0885c.0735,0,.1215-.076.1215-.2145V1.5A.5.5,0,0,0,13.5,1Z" />
		</svg>
	)
}
