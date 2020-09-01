import * as React from 'react';

function SvgCheckmark(props) {
	return (
		<svg width={32} height={32} alt="Complited" {...props}>
			<path d="M27 4L12 19l-7-7-5 5 12 12L32 9z" />
		</svg>
	);
}

export default SvgCheckmark;
