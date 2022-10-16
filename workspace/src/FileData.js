import React from 'react'

export function FileData(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="8 1 8 6 3 6 8 1" />
			<path d="M10,17V8.9305c0-1.65,2.333-2.4,4.5-2.4.166,0,.333.0125.5.0215V1.5a.5.5,0,0,0-.5-.5H9V6.5a.5.5,0,0,1-.5.5H3v9.5a.5.5,0,0,0,.5.5Z" />
			<path d="M14.5,14c-1.933,0-3.5-.6265-3.5-1.4v-2c0,.773,1.567,1.533,3.5,1.533S18,11.373,18,10.6v2C18,13.3735,16.433,14,14.5,14ZM18,16.5895v-2.579c0,.773-1.567,1.4-3.5,1.4s-3.5-.6265-3.5-1.4V16.59c0,.773,1.567,1.4,3.5,1.4S18,17.363,18,16.5895Zm0-7.534c0-.773-1.5975-1.313-3.5305-1.313S11,8.2825,11,9.0555s1.567,1.4,3.5,1.4S18,9.829,18,9.0555Z" />
		</svg>
	)
}
