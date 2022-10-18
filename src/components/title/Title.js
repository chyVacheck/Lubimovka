import styleTitle from './Title.module.scss';

export default function Title({ text, bigSize }) {
  return (
    <h2
      className={`${styleTitle.title} ${
        bigSize === 'true' && styleTitle.title_bigsize
      }`}
    >
      {text}
    </h2>
  );
}
