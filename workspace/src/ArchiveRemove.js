import React from 'react'

export function ArchiveRemove(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={3} rx="0.5" width={16} y={1} />
			<path d="M13.5,9.05a4.425,4.425,0,1,0,4.42413,4.42413A4.425,4.425,0,0,0,13.5,9.05Zm2.5,4.7a.25.25,0,0,1-.25.25h-4.5a.25.25,0,0,1-.25-.25v-.5a.25.25,0,0,1,.25-.25h4.5a.25.25,0,0,1,.25.25Z" />
			<path d="M8.4465,10H5.5A.5.5,0,0,1,5,9.5v-2A.5.5,0,0,1,5.5,7h5a.5.5,0,0,1,.5.5v.3845a6.05451,6.05451,0,0,1,4-.3425V5H1v7.5a.5.5,0,0,0,.5.5H7.375A6.108,6.108,0,0,1,8.4465,10Z" />
		</svg>
	)
}