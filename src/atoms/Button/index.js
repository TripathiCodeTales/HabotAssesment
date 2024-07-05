import React from 'react';
import styles from './index.module.css';

const Button = (props) => {
	const { content, name, className } = props;

	return (
		<button className={[styles.buttonContainer, className].join(' ')}>
			<b className={styles.buttonText}>{content}</b>
			<div className={styles.iconWrapper}>
				{name && (
					<img
						className={styles.buttonIcon}
						src={name}
					/>
				)}
			</div>
		</button>
	);
};

export default Button;
