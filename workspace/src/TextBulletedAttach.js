import React from 'react'

export function TextBulletedAttach(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M6,8.5v1a.5.5,0,0,0,.5.5H9.85l1.9-1.9c.037-.037.0815-.0635.12-.1H6.5A.5.5,0,0,0,6,8.5ZM16.5,2H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2ZM3.6,13H3.4A1.4,1.4,0,0,0,2,14.4v.2A1.4,1.4,0,0,0,3.4,16h.2A1.4,1.4,0,0,0,5,14.6v-.2A1.4,1.4,0,0,0,3.6,13Zm0-6H3.4A1.4,1.4,0,0,0,2,8.4v.2A1.4,1.4,0,0,0,3.4,10h.2A1.4,1.4,0,0,0,5,8.6V8.4A1.4,1.4,0,0,0,3.6,7Zm2.9,7a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H8.922a4.721,4.721,0,0,1-.6395-2ZM3.6,1H3.4A1.4,1.4,0,0,0,2,2.4H2v.2A1.4,1.4,0,0,0,3.4,4h.2A1.4,1.4,0,0,0,5,2.6V2.4A1.4,1.4,0,0,0,3.6,1Z" />
			<path d="M18,14.0355l-2.35,2.35a3.50018,3.50018,0,0,1-4.95-4.95L13.4035,8.732a2.5,2.5,0,0,1,3.5355,3.5355L14.2355,14.971a1.5,1.5,0,0,1-2.121-2.121l2.35-2.35.707.707-2.35,2.35a.5.5,0,0,0,.707.707l2.7035-2.7035A1.50013,1.50013,0,1,0,14.1105,9.439L11.407,12.1425a2.5,2.5,0,0,0,3.5355,3.5355l2.35-2.35Z" />
		</svg>
	)
}