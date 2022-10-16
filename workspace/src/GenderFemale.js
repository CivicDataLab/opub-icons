import React from 'react'

export function GenderFemale(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<circle cx={9} cy="1.8425" r="1.8425" />
			<path d="M6.4305,6.6235l.259,3.0195-2.054,3.534a.279.279,0,0,0,.2685.356H7.0115l.827,4.2425A.27751.27751,0,0,0,8.111,18H9.8895a.27751.27751,0,0,0,.2725-.2245l.827-4.2425h2.1075a.279.279,0,0,0,.2685-.356L11.33,9.643l.2435-3.028a1.93651,1.93651,0,0,0-.9145-1.8725A1.9665,1.9665,0,0,0,9.7105,4.5H8.2895a1.96694,1.96694,0,0,0-.945.241A1.935,1.935,0,0,0,6.4305,6.6235Z" />
		</svg>
	)
}
