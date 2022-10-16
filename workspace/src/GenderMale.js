import React from 'react'

export function GenderMale(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx="8.625" cy="1.974" r="1.974" />
			<path d="M8.7375,4.5h-.225c-1.8,0-3.2625.907-3.2625,2.7265V11.933a.281.281,0,0,0,.2805.2815h1.094L7.14,17.755A.2815.2815,0,0,0,7.419,18H9.825a.281.281,0,0,0,.279-.2445l.519-5.541h1.096a.281.281,0,0,0,.281-.281V7.2265C12,5.407,10.5395,4.5,8.7375,4.5Z" />
		</svg>
	)
}
