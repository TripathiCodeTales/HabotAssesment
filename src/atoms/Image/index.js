
const Image = (props) => {
	const { img, width, height, className } = props;
	return (
		<img
			className={className}
			src={img}
			width={width}
			height={height}
		/>
	);
};

export default Image;
