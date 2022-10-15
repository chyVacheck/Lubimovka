import style from '../main/Main.module.scss';

function Main(props) {
  console.log(style);
  return <main className="main">{props.children}</main>;
}

export default Main;
