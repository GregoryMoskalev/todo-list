import * as React from 'react';

function SvgFloppyDisk(props) {
	return (
		<svg width={32} height={32} alt="Save" {...props}>
			<path d="M28 0H0v32h32V4l-4-4zM16 4h4v8h-4V4zm12 24H4V4h2v10h18V4h2.343L28 5.657V28z" />
		</svg>
	);
}

export default SvgFloppyDisk;
