import style from './ColoredPlace.module.scss';

function ColoredPlace(props) {
  return <div className={style.coloredPlace}>{props.children}</div>;
}

export default ColoredPlace;
