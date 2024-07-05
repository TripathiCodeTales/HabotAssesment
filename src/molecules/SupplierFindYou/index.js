import PropTypes from 'prop-types';
import styles from './index.module.css';

const SupplierFindYou = () => {
	return (
		<section className={styles.supplierFindYouContainer}>
			<div className={styles.supplierFindYouWrapper}>
				<div className={styles.leftSectionContainer}>
					<div>
						<div className={styles.sectionTitle}>Let Suppliers Find You</div>
						<div className={styles.sectionBottom}>
							<div className={styles.sectionDivider} />
						</div>
					</div>
				</div>
				<div className={styles.buttonWrapper}>
					<b>Get Verified</b>
				</div>
			</div>
		</section>
	);
};

SupplierFindYou.propTypes = {
	className: PropTypes.string,
};

export default SupplierFindYou;
