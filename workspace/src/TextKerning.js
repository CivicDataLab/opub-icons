import React from 'react'

export function TextKerning(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M5.2,9.3795c.3-1.053.9725-3.35,2.255-7.1435.027-.081.0545-.108.1215-.108H9.05c.067,0,.1075.0405.0805.1215l-3.094,8.656A.1175.1175,0,0,1,5.9,11H4.335a.1195.1195,0,0,1-.1345-.081L1.027,2.25c-.027-.0675,0-.1215.0805-.1215H2.661a.0935.0935,0,0,1,.10708.07758L2.7685,2.209C4.052,5.759,4.929,8.3805,5.1725,9.38Z" />
			<path d="M14.209,2.2085c-.013-.067-.027-.0805-.0945-.0805h-1.877c-.0535,0-.0805.0405-.0805.0945a2.06588,2.06588,0,0,1-.122.7275L9.2535,10.865c-.014.0945.013.135.0945.135h1.35a.1335.1335,0,0,0,.15-.108L11.477,9h3.4565L15.6,10.919a.136.136,0,0,0,.1355.081H17.25c.0805,0,.0945-.0405.0805-.1215Zm-1.026,1.27h.013c.2705.945,1.05,3.2405,1.332,4.132h-2.65C12.2845,6.382,12.967,4.383,13.183,3.4785Z" />
			<path d="M16.75,13.5H8V12.25A.25.25,0,0,0,7.75,12a.245.245,0,0,0-.1655.0645l-2,2a.25.25,0,0,0-.019.353l.019.019,2,2A.245.245,0,0,0,7.75,16.5.25.25,0,0,0,8,16.25V15h8.75a.25.25,0,0,0,.25-.25v-1A.25.25,0,0,0,16.75,13.5Z" />
		</svg>
	)
}
