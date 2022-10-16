import React from 'react'

export function Chat(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M9.5,7a.5.5,0,0,1,.5.5v6a.5.5,0,0,1-.5.5H4.793a.5.5,0,0,0-.3535.1465L3,15.5855V14.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,1-.5-.5v-6A.5.5,0,0,1,1.5,7Zm-8-1A1.5,1.5,0,0,0,0,7.5v6A1.5,1.5,0,0,0,1.5,15H2v2.3965a.25.25,0,0,0,.427.1765L5,15H9.5A1.5,1.5,0,0,0,11,13.5v-6A1.5,1.5,0,0,0,9.5,6Z" />
			<path d="M12,7.3A2.3,2.3,0,0,0,9.7,5H6V2.5A1.5,1.5,0,0,1,7.5,1h9A1.5,1.5,0,0,1,18,2.5v6A1.5,1.5,0,0,1,16.5,10H15v2.3965a.25.25,0,0,1-.427.1765L12,10Z" />
		</svg>
	)
}
