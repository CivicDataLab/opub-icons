import React from 'react'

export function Organize(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7,4H1V2.5A.5.5,0,0,1,1.5,2H4.793a.5.5,0,0,1,.3535.1465Z" />
			<path d="M16.5,5H1V15.5a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V5.5A.5.5,0,0,0,16.5,5ZM6,7.25A.25.25,0,0,1,6.25,7h7a.25.25,0,0,1,.25.25v.5a.25.25,0,0,1-.25.25h-7A.25.25,0,0,1,6,7.75ZM4.25,13.875a.375.375,0,0,1-.375.375h-.75a.375.375,0,0,1-.375-.375v-.75a.375.375,0,0,1,.375-.375h.75a.375.375,0,0,1,.375.375Zm0-3a.375.375,0,0,1-.375.375h-.75a.375.375,0,0,1-.375-.375v-.75a.375.375,0,0,1,.375-.375h.75a.375.375,0,0,1,.375.375Zm0-3a.375.375,0,0,1-.375.375h-.75a.375.375,0,0,1-.375-.375v-.75a.375.375,0,0,1,.375-.375h.75a.375.375,0,0,1,.375.375ZM12.5,13.75a.25.25,0,0,1-.25.25h-6A.25.25,0,0,1,6,13.75v-.5A.25.25,0,0,1,6.25,13h6a.25.25,0,0,1,.25.25Zm3-3a.25.25,0,0,1-.25.25h-9A.25.25,0,0,1,6,10.75v-.5A.25.25,0,0,1,6.25,10h9a.25.25,0,0,1,.25.25Z" />
		</svg>
	)
}