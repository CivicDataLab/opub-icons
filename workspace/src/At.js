import React from 'react'

export function At(props) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 18"
			width={props.width || 18}
			{...props}
		>
			<rect fill="currentColor" opacity={0} />
			<path d="M12.097,12.577c1.05-.2145,3.2575-1.3075,3.2575-4.6935a5.43279,5.43279,0,0,0-5.765-5.765c-3.7935,0-6.8795,2.55-6.8795,7.2A7.08652,7.08652,0,0,0,6.7175,16.091a.204.204,0,0,1,.107.1925L6.782,17.7c0,.1075-.0215.1075-.1075.086A8.665,8.665,0,0,1,1.081,9.405,8.29353,8.29353,0,0,1,9.6535.705c4.0295,0,7.2655,2.6145,7.2655,7.05,0,4.35-3.1935,6.4725-6.8365,6.4725-2.829,0-4.7795-1.586-4.7795-4.65A4.86449,4.86449,0,0,1,9.98956,4.54135q.15342-.00552.30694-.00135a5.70532,5.70532,0,0,1,2.1435.343c.0855.0215.107.043.107.1285ZM10.961,6.019a2.87286,2.87286,0,0,0-.8785-.107,3.25475,3.25475,0,0,0-3.215,3.536c0,1.8645.986,3.3435,3.0435,3.3435a2.6426,2.6426,0,0,0,.664-.0645Z" />
		</svg>
	)
}