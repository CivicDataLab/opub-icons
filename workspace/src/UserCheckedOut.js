import React from 'react'

export function UserCheckedOut(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M13.5,9A4.5,4.5,0,1,0,18,13.5,4.5,4.5,0,0,0,13.5,9ZM16,14.4071a.25.25,0,0,1-.42676.17676L14.525,13.53564l-2.31794,2.31793a.25.25,0,0,1-.3535,0l-.70715-.70714a.25.25,0,0,1,0-.35351L13.46436,12.475l-1.04828-1.04821A.25.25,0,0,1,12.59289,11h3.26386A.14327.14327,0,0,1,16,11.14325Z" />
			<path d="M7.75,13.5a5.737,5.737,0,0,1,2.38806-4.658,7.50821,7.50821,0,0,0,1.6532-4.321c0-2.713-1.544-4.521-3.766-4.521s-3.766,1.808-3.766,4.521A7.51706,7.51706,0,0,0,6.02527,9c0,.826-.013,1.488-.837,1.56-1.126.1-4.808,1.322-5.139,4.913a.50008.50008,0,0,0,.47229.52631L.54926,16H8.328A5.71616,5.71616,0,0,1,7.75,13.5Z" />
		</svg>
	)
}
