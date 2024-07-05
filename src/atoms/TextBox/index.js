import React from 'react';
import styles from './index.module.css';

const TextBox = (props) => {
	const { placeholder, icon } = props;

	return (
		<div className={styles.inputContainer}>
			<img
				className={styles.inputIcon}
				src={icon}
			/>
			<div className={styles.inputWrapper}>
				<div className={styles.inputPlaceholder}>{placeholder}</div>
			</div>
		</div>
	);
};

export default TextBox;
