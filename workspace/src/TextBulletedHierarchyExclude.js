import React from 'react'

export function TextBulletedHierarchyExclude(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.5,9.05a4.45,4.45,0,1,0,4.45,4.45A4.45,4.45,0,0,0,13.5,9.05ZM10,13.5a3.46455,3.46455,0,0,1,.7375-2.126l4.8885,4.8885A3.483,3.483,0,0,1,10,13.5Zm6.2625,2.126L11.374,10.7375a3.483,3.483,0,0,1,4.8885,4.8885Z" />
			<rect height={3} rx="1.4" width={3} y={1} />
			<rect height={3} rx="1.4" width={3} x={3} y={7} />
			<rect height={3} rx="1.4" width={3} x={3} y={13} />
			<rect height={2} rx="0.5" width={11} x={4} y={2} />
			<path d="M13.5,8h-6a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H9.2575A5.4875,5.4875,0,0,1,13.5,8Z" />
			<path d="M8.025,14H7.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H8.605A5.47085,5.47085,0,0,1,8.025,14Z" />
		</svg>
	)
}
