import React from 'react'

export function Deduplication(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx="3.9695" cy="3.125" r="1.875" />
			<polygon points="10.753 5 6.378 5 8.566 1.25 10.753 5" />
			<circle cx="5.9695" cy="15.125" r="1.875" />
			<polygon points="13.802 17 9.427 17 11.614 13.25 13.802 17" />
			<polygon points="16.06 5 11.686 5 13.873 1.25 16.06 5" />
			<path d="M13.9695,6.029h-10V6.64a.757.757,0,0,0,.3615.65L7.1755,9.3a1.528,1.528,0,0,1,.557,1.1885V12.585a.3665.3665,0,0,0,.357.375H9.85a.3665.3665,0,0,0,.357-.375V10.488A1.528,1.528,0,0,1,10.7635,9.3L13.608,7.2925a.757.757,0,0,0,.3615-.65Z" />
		</svg>
	)
}
