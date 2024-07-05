import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import styles from './index.module.css';
import VideoContent from '../../components/VideoContent';
import Badge from '../../atoms/Badge/index';

const ReadyToDive = () => {
	const NameOfCities = ['Abu Dhabi', 'Dubai', 'Sharjah & Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'];

	return (
		<>
			<section className={styles.readyToDiveWrapper}>
				<div className={styles.readyToDiveContainer}>
					<div className={styles.container}>
						<div className={styles.wrapper}>
							<div className={styles.leftSection}>
								<div className={styles.leftSectionWrapper}>
									<b>
										<span className={styles.readyToDiveContainer1}>
											<span>{`Ready to dive into `}</span>
											<span className={styles.habot}>HABOT?</span>
										</span>
									</b>
									<div className={styles.readyToDiveText}>
										<div>
											Signing up with HABOT opens the door to a world of new opportunities and potential for business
											growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources,
											and take the first step towards realizing your entrepreneurial dreams.
										</div>
									</div>
								</div>
								<div className={styles.signUpToday}>
								<Button
									content='Sign Up Today'
									name='/group.svg'
									className={styles.signUpBtn}
								/>
								</div>
							</div>
							<div className={styles.rightSection}>
								<div className={styles.cityWrapper}>
									{NameOfCities.map((city) => {
										return <Badge title={city} />;
									})}
								</div>
							</div>
						</div>
					</div>
					<VideoContent />
				</div>
			</section>
		</>
	);
};

ReadyToDive.propTypes = {
	className: PropTypes.string,
};

export default ReadyToDive;
