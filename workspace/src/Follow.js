import React from 'react'

export function Follow(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.044,14.45l-.379.05a1.45,1.45,0,0,1-1.62561-1.25L5.039,13.247l-.15-1.3625,3.258-.4225.15,1.3625a1.45,1.45,0,0,1-1.25052,1.62518ZM5.9725.669C5.135-.3075,4.2-.4,3.5365,1.654c-.98,4.35-.22,6.105,1.161,8.96l3.258-.4225c-.35-2.697.322-3.9075.181-4.993A8.78345,8.78345,0,0,0,5.9725.669Z" />
			<path d="M10.6865,17.916l.377.0635a1.45,1.45,0,0,0,1.67242-1.18659l.00058-.00341.2-1.3295L9.7,14.9135,9.5,16.243a1.45,1.45,0,0,0,1.18592,1.6729ZM12.284,4.185c.8745-.944,1.8165-1,2.3995,1.0775.813,4.3835-.0135,6.109-1.503,8.909L9.938,13.625c.45-2.6815-.172-3.917.01-4.996A8.78449,8.78449,0,0,1,12.284,4.185Z" />
		</svg>
	)
}