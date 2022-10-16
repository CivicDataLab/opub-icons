import React from 'react'

export function Audio(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M15,1.7085a.5.5,0,0,0-.634-.4825l-8,2.2235A.5.5,0,0,0,6,3.9315v8.275a3.314,3.314,0,0,0-3.072.0285c-1.5565.7575-2.3435,2.35-1.7575,3.55s2.323,1.568,3.8795.81A3.217,3.217,0,0,0,7,13.9285V6.412l7-2v5.7945a3.314,3.314,0,0,0-3.072.0285c-1.5565.7575-2.3435,2.35-1.7575,3.55s2.323,1.566,3.8795.808A3.2135,3.2135,0,0,0,15,11.9165Z" />
		</svg>
	)
}