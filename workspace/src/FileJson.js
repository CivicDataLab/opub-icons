import React from 'react'

export function FileJson(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<polygon points="10 1 10 6 15 6 10 1" />
			<path d="M9.5,7A.49987.49987,0,0,1,9,6.50026V1H3.5a.49976.49976,0,0,0-.5.4995V16.5a.49987.49987,0,0,0,.49974.5H14.5a.49991.49991,0,0,0,.5-.49982V7ZM8.01169,8.88266a.22709.22709,0,0,1-.23162.22223l-.51524.04228a.21535.21535,0,0,0-.22766.20044v1.54124a1.98511,1.98511,0,0,1-.60089,1.1065,2.06337,2.06337,0,0,1,.60089,1.11573V14.6557a.21973.21973,0,0,0,.23169.20392h.53177a.22707.22707,0,0,1,.23163.22223v.76043a.2271.2271,0,0,1-.23163.22223H7.524a1.64387,1.64387,0,0,1-1.56944-1.84228v-1.158a.96949.96949,0,0,0-.47841-.89533.19037.19037,0,0,1,.00226-.34308.95671.95671,0,0,0,.47615-.89935c0-.27173-.00421-.28284-.0085-1.14044a1.63031,1.63031,0,0,1,1.56945-1.8344l.26456-.04228a.22707.22707,0,0,1,.23163.22223Zm4.51217,3.28622a.97977.97977,0,0,0-.48977.89533v1.158A1.63566,1.63566,0,0,1,10.476,16.06449h-.2986a.2271.2271,0,0,1-.23163-.22223v-.76041a.22706.22706,0,0,1,.23163-.22223h.55372a.21971.21971,0,0,0,.23169-.20391V13.11108a2.06334,2.06334,0,0,1,.60089-1.11572,1.98515,1.98515,0,0,1-.60089-1.1065V9.34761a.21535.21535,0,0,0-.22766-.20044h-.54162a.22711.22711,0,0,1-.23163-.22223v-.7511a.22706.22706,0,0,1,.23163-.22222h.291A1.62213,1.62213,0,0,1,12.04258,9.786c-.00428.85761-.0085.86872-.0085,1.14045a.96637.96637,0,0,0,.4875.89935.19036.19036,0,0,1,.00228.34307Z" />
		</svg>
	)
}