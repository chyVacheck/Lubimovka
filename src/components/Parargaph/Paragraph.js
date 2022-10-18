import styles from './Paragraph.module.scss';

const Paragraph = props => (
  <p
    className={`${styles.paragraph} ${
      props.isFeature && styles.paragraph_feature
    } ${
      props.isMiddle
        ? styles.paragraph_middle
        : props.isLittle
        ? styles.paragraph_little
        : ''
    }`}
  >
    {props.text}
  </p>
);

export default Paragraph;
