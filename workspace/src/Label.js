import React from 'react'

export function Label(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M16.6465,7.6465l-7.5-7.5A.5.5,0,0,0,8.793,0H2.5A.5.5,0,0,0,2,.5V6.793a.5.5,0,0,0,.1465.3535l7.5,7.5a.5.5,0,0,0,.707,0l6.293-6.293A.5.5,0,0,0,16.6465,7.6465ZM5,4.3A1.3,1.3,0,1,1,6.3,3,1.3,1.3,0,0,1,5,4.3Z" />
			<path d="M16.6465,10.7535,16.25,10.357l-5.8965,5.8965a.5.5,0,0,1-.707,0l-7.5-7.5A.5.5,0,0,1,2,8.4V9.9a.5.5,0,0,0,.1465.354l7.5,7.5a.5.5,0,0,0,.707,0l6.293-6.2935A.5.5,0,0,0,16.6465,10.7535Z" />
		</svg>
	)
}