import styles from './Container.module.scss';

function Container(props) {
  return (
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
}

export default Container;
