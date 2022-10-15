import styleTitle from './Title.module.scss';

export default function Title({ text, bigSize }) {
  console.log(styleTitle);
  return (
    <h2 className={`${styleTitle.title} ${bigSize === 'true' && styleTitle.title_bigsize}`}>
      {text}
    </h2>
  );
}
