import style from './ColoredPlace.module.scss';

const ColoredPlace = props => (
  <div className={style.coloredPlace}>{props.children}</div>
);

export default ColoredPlace;
