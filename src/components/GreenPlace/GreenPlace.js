import style from './GreenPlace.module.scss';

function GreenPlace(props) {
  return <div className={style.GreenPlace}>{props.children}</div>;
}

export default GreenPlace;
