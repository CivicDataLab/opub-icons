import React from 'react'

export function NamingOrder(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M3.0805,8.3675,2.31,10.878c-.028.091-.0705.122-.154.122H.756c-.0845,0-.1125-.0455-.1-.15L3.5425,1.9285A2.51436,2.51436,0,0,0,3.669,1.107c0-.0615.028-.107.084-.107H5.7c.0705,0,.084.015.1.0915L9.0355,10.863c.0145.0915,0,.137-.084.137H7.381a.14051.14051,0,0,1-.1405-.0915L6.428,8.3675Zm2.9-1.6595c-.294-1.005-.9525-3.12-1.233-4.1855h-.014c-.224,1.02-.785,2.8-1.2045,4.1855Z" />
			<path d="M9.613,17c-.0565,0-.1125-.015-.1125-.122v-1.02a.346.346,0,0,1,.042-.1825l4.861-7.032H9.711c-.0705,0-.1125-.0145-.1-.106l.21-1.4155C9.835,7.031,9.877,7,9.9465,7H16.463c.069,0,.084.031.084.0915v1.096a.3265.3265,0,0,1-.0705.213L11.7,15.3415h5.015c.069,0,.1.0455.069.137l-.2235,1.4c-.0135.091-.042.122-.126.122Z" />
		</svg>
	)
}
