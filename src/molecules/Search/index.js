import PropTypes from 'prop-types';
import styles from './index.module.css';
import Button from '../../atoms/Button';
import TextBox from '../../atoms/TextBox';

const Search = () => {
	return (
		<>
			<img
				className={styles.mainImg}
				src='/logo-placeholder@2x.png'
			/>
			<section className={styles.searchContainer}>
				<div className={styles.searchWrapper}>
					<div className={styles.mainSecton}>
						<div className={styles.headingContainer}>
							<p>
								<b>Are You a Supplier?</b>
							</p>
							<p>Explore Matching Opportunities.</p>
						</div>
						<div className={styles.searchBoxContainer}>
							<div className={styles.searchBox}>
								<TextBox
									icon='/suitcase-1.svg'
									placeholder='Search your required service here'
								/>
							</div>
							<div className={styles.searchBox}>
								<TextBox
									icon='/placeholder-1.svg'
									placeholder='Search your desired location here'
								/>
							</div>
							<div className={styles.searchButton}>
								<Button content='search' />
							</div>
						</div>
					</div>
					<div className={styles.bottomSection}>
						<div className={styles.subHeadingContainer}>
							<span>
								<b className={styles.bottomText}>{`Are you a buyer?   `}</b>
								<span className={styles.hyperLink}>Click here if you are looking to post a requirements</span>
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

Search.propTypes = {
	className: PropTypes.string,
};

export default Search;
