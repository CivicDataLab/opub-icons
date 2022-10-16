import React from 'react'

export function Pawn(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<rect height={2} rx="0.447" width={12} x={3} y={16} />
			<path d="M12.592,6H10.655A3,3,0,1,0,7.3455,6H5.408A.408.408,0,0,0,5,6.408V7.5915a.408.408,0,0,0,.408.408H7.5L6,15h6L10.5,8h2.092A.408.408,0,0,0,13,7.592V6.408A.408.408,0,0,0,12.592,6Z" />
		</svg>
	)
}
