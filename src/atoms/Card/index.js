import PropTypes from "prop-types";
import styles from "./index.module.css";

const Card = (props) => {
  const { icon, description, cardWrapperStyle } = props;
  return (
    <div className={styles.cardWrapper} style={cardWrapperStyle}>
      <div className={styles.iconWrapper}>
        <img className={styles.icon} src={icon} />
      </div>
      <div className={styles.descriptions}>{description}</div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
