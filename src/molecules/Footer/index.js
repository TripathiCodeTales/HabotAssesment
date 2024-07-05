import PropTypes from 'prop-types';
import Image from '../../atoms/Image';
import styles from './index.module.css';

const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.footerWrapper}>
				<div className={styles.footerMenus}>
					<div className={styles.footerLinks}>
						<div className={styles.linksContainer2}>
							<Image
								className={styles.footerImg}
								img='/div-2naf1tmz.svg'
							/>
							<div className={styles.section}>
								<div>Company</div>
								<div>About</div>
								<div>FAQ</div>
							</div>
							<div className={styles.section}>
								<div>Terms</div>
								<div>Data privacy</div>
								<div>Accessibility</div>
							</div>
							<div>
								<div className={styles.section}>
									<div>Related</div>
									<div>Find Buyer</div>
									<div>Feedback</div>
								</div>
							</div>
							<br />
							<br />
						</div>
					</div>
				</div>
				<div>
					<div className={styles.socialList}>
						<Image img='/item--link--linkedin.svg' />
						<Image img='/item--link--twitter.svg' />
						<Image img='/item--link--facebook.svg' />
						<Image img='/item--link--instagram.svg' />
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
