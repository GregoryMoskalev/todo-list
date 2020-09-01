import * as React from 'react';

function SvgPencil(props) {
	return (
		<svg width={32} height={32} {...props}>
			<path d="M27 0a5 5 0 014 8l-2 2-7-7 2-2c.836-.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7L2 23zm20.362-11.638l-14 14-1.724-1.724 
14-14 1.724 1.724z" />
		</svg>
	);
}
export default SvgPencil;
