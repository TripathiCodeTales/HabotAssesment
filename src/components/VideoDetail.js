import React from 'react';
import Image from '../atoms/Image';
import styles from './VideoContent.module.css';

const VideoDetail = () => {
	return (
		<div className={styles.stepsContentWrapper}>
			<div className={styles.stepsContent}>
				<div className={styles.stepsContainer}>
					<div className={styles.buyerStepParent}>
						<div className={styles.buyerStep}>
							<b className={styles.buyer}>Buyer</b>
						</div>
						<div className={styles.highlightShape} />
					</div>
					<div className={styles.supplierStep}>
						<b className={styles.supplier}>Supplier</b>
					</div>
				</div>
				<div className={styles.descriptionContentParent}>
					<div className={styles.descriptionContent}>
						<div className={styles.checked21Parent}>
							<Image
								className={styles.checked21}
								img='/checked-2-1.svg'
							/>
							<Image
								className={styles.checked21}
								img='/checked-2-1.svg'
							/>
							<Image
								className={styles.checked21}
								img='/checked-2-1.svg'
							/>
						</div>
					</div>
					<div className={styles.postYourRequirementsContainer}>
						<p className={styles.postYourRequirements}>Post your requirements.</p>
						<p className={styles.sitBackFor}>Sit back for multiple suppliers to contact you.</p>
						<p className={styles.chooseAmongThe}>Choose among the suppliers based on the ratings and reviews.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
