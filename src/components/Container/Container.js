import styles from './Container.module.scss';

const Container = props => (
  <section
    className={styles.container}
    style={{
      maxWidth: props.maxWidth,
      padding: props.padding,
    }}
  >
    {props.children}
  </section>
);

export default Container;
