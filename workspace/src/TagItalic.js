import React from 'react'

export function TagItalic(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M8.841,15.8315c-.0205.1065-.04.15-.141.15H6.66c-.1,0-.1395-.0215-.12-.1705L8.7805,2.1275C8.801,2.021,8.8605,2,8.921,2h2.0605c.12,0,.1395.0635.1395.17Z" />
		</svg>
	)
}
