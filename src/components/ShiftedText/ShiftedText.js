import styles from './ShiftedText.module.scss';
import Title from '../title/Title';
import Paragraph from '../Parargaph/Paragraph';

const ShiftedText = props => (
  <>
    <Title text={props.titleText} />
    <div
      className={`${styles.shiftedText} ${
        props.isLittleShift && styles.shiftedText_little
      }`}
    >
      <Paragraph text={props.text} isFeature={props.isFeature} />
    </div>
  </>
);

export default ShiftedText;
