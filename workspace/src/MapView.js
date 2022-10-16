import React from 'react'

export function MapView(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M12.8,1.053,9,2.9525,5.2235,1.064a.5.5,0,0,0-.447,0l-3.5,1.75A.5.5,0,0,0,1,3.2615v12.882a.5.5,0,0,0,.7235.447L5,14.9525l3.7765,1.888a.5.5,0,0,0,.447,0L13,14.9525l4.3145,1.7255A.5.5,0,0,0,18,16.214V3.291a.5.5,0,0,0-.3145-.4645L13.2085,1.036A.5.5,0,0,0,12.8,1.053ZM9,15.8705l-4-2V2L9,4Zm8-.3555-4-1.5625v-12L17,3.515Z" />
		</svg>
	)
}