import style from './ColoredPlace.module.scss';

function ColoredPlace(props) {
  return <div className={style.ColoredPlace}>{props.children}</div>;
}

export default ColoredPlace;
