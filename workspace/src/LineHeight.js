import React from 'react'

export function LineHeight(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.5" width={11} x={6} y={2} />
			<rect height={2} rx="0.5" width={11} x={6} y={8} />
			<rect height={2} rx="0.5" width={11} x={6} y={14} />
			<path d="M4.5,15H3.497L3.5,4H4.503a.25.25,0,0,0,.25-.25.245.245,0,0,0-.0735-.175L2.912,1.5565a.25.25,0,0,0-.3165,0L.8275,3.573a.24549.24549,0,0,0-.074.175.25.25,0,0,0,.25.25h1.004L2.0045,15H1a.25.25,0,0,0-.25.25.245.245,0,0,0,.0735.175L2.592,17.4415a.25.25,0,0,0,.316,0L4.676,15.425a.24549.24549,0,0,0,.074-.175A.25.25,0,0,0,4.5,15Z" />
		</svg>
	)
}
