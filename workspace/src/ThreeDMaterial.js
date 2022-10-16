import React from 'react'

export function ThreeDMaterial(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5.7465,13.9815a.108.108,0,0,0-.1415-.134c-.367.1435-.926.3065-1.1675.0655-.762-.763.7435-3.881,3.2455-6.383s5.65-3.908,6.379-3.18a.54451.54451,0,0,1,.1265.5055.10951.10951,0,0,0,.1405.1245,4.52848,4.52848,0,0,1,.7475-.163.21051.21051,0,0,0,.1835-.1895,1.124,1.124,0,0,0-.25-.9475L15,3.6735a7.975,7.975,0,1,0-11.84107,10.686q.20134.22306.41907.43048a.3918.3918,0,0,0,.0625.05,1.06013,1.06013,0,0,0,.771.2705,3.24991,3.24991,0,0,0,1.007-.2.228.228,0,0,0,.15-.1805A5.71435,5.71435,0,0,1,5.7465,13.9815Z" />
			<path d="M16.75,7.3645c-.1465-.8855-.4695-1.4795-1.2545-1.4795-1.345,0-3.5035,1.3595-5.5,3.4635-2.368,2.5-3.733,5.2-3.319,6.572a1.371,1.371,0,0,0,1.229.9435,7.21187,7.21187,0,0,0,1.1085.086,7.472,7.472,0,0,0,5.5-2.372A7.979,7.979,0,0,0,16.75,7.3645Z" />
		</svg>
	)
}
