import style from '../main/Main.module.scss';

function Main(props) {
  return <main className="main">{props.children}</main>;
}

export default Main;
