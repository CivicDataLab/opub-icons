import React from 'react'

export function Shop(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			data-name="Layer 1"
			id="Layer_1"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M17.46972,8H.53027a.4.4,0,0,1-.38458-.50989l1.75067-6.1275A.5.5,0,0,1,2.37714,1H15.62286a.5.5,0,0,1,.48078.36261l1.75067,6.1275A.4.4,0,0,1,17.46972,8ZM15,9v3H7V9H6v7H3V9H2v7a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V9ZM2,7H3L4,2H3ZM6.25,7h1l.5-5h-1Zm4-5,.5,5h1l-.5-5ZM15,2H14l1,5h1Z" />
		</svg>
	)
}
