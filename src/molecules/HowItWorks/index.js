import PropTypes from 'prop-types';
import styles from './index.module.css';
import Card from '../../atoms/Card';

const HowItWorks = () => {
	return (
		<section className={styles.howItWorkContainer}>
			<div className={styles.howItWorkWrapper}>
				<div className={styles.headingWrapper}>
					<div className={styles.headingContainer}>
						<b>How it works?</b>
					</div>
					<div className={styles.subHeading}>
						Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential
						buyers, and build successful business relationships, sharing valuable feedback.
					</div>
				</div>
				<div className={styles.cardsWrapper}>
					<Card
						icon='/group-33.svg'
						description='Select Your Role and Sign Up'
						cardWrapperStyle={{
							backgroundColor: '#e8fbff',
						}}
					/>
					<Card
						icon='/document-1-1.svg'
						description='Buyers Post Your Requirements'
					/>
					<Card
						icon='/layer-x0020-1.svg'
						description=' Review, Select, and Contact the Best Suppliers'
						cardWrapperStyle={{
							backgroundColor: '#e8fbff',
						}}
					/>
					<Card
						icon='/edit-1-1@2x.png'
						description='Suppliers Complete your profile and get notified for opportunities'
						cardWrapperStyle={{
							backgroundColor: '#fff',
						}}
					/>
					<Card
						icon='/quoterequest-1.svg'
						description='Contact to Buyers and Share your Quote for the service'
						cardWrapperStyle={{
							backgroundColor: '#e8fbff',
						}}
					/>
					<Card
						icon='/group-1.svg'
						description='Both the Parties can Connect and Make Business Leave a Feedback'
						cardWrapperStyle={{
							backgroundColor: '#fff',
						}}
					/>
				</div>
			</div>
		</section>
	);
};

HowItWorks.propTypes = {
	className: PropTypes.string,
};

export default HowItWorks;
