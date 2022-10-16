import React from 'react'

export function HotFixe(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M7.07.8935a.25.25,0,0,0-.426.2355,7.52692,7.52692,0,0,1,.3265,3.283,8.48861,8.48861,0,0,1-1.455,3.0825,13.41576,13.41576,0,0,0-1.4245,2.75,5.2055,5.2055,0,1,0,10.1115,1.75V11.976c-.038-2.4225-1.518-5.771-3.011-8a.25.25,0,0,0-.4535.1635c.2605,4.1785-2,5.6575-2,5.6575S10.562,4.628,7.07.8935Z" />
		</svg>
	)
}
