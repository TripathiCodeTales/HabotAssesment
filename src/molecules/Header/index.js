import PropTypes from 'prop-types';
import Image from '../../atoms/Image';
import styles from './index.module.css';

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<Image
				img='/image-1@2x.png'
				className={styles.headerIcon}
			/>
			<div className={styles.headerContent}>
				<div>
					<a>Find Suppliers</a>
				</div>
				<div className={styles.headerTag}>
					<a>Find Service Tags</a>
					<div>
						<Image img='/svg.svg' />
					</div>
				</div>
				<button className={styles.loginBtn}>
					<a className={styles.loginText}>Login / Sign Up</a>
				</button>
			</div>
		</header>
	);
};

Header.propTypes = {
	className: PropTypes.string,
};

export default Header;
