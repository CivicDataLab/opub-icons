import React from 'react'

export function DistributeSpaceVert(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={5} rx="0.5" width={12} x={5} y={11} />
			<rect height={6} rx="0.5" width={8} x={6} y={2} />
			<path d="M3.75,8A.25.25,0,0,0,4,7.75v-.5A.25.25,0,0,0,3.75,7H2V5.25A.25.25,0,0,0,1.75,5h-.5A.25.25,0,0,0,1,5.25V7H.25A.25.25,0,0,0,0,7.25v.5A.25.25,0,0,0,.25,8H1v3H.25a.25.25,0,0,0-.25.25v.5A.25.25,0,0,0,.25,12H1v1.75a.25.25,0,0,0,.25.25h.5A.25.25,0,0,0,2,13.75V12H3.75A.25.25,0,0,0,4,11.75v-.5A.25.25,0,0,0,3.75,11H2V8Z" />
		</svg>
	)
}
