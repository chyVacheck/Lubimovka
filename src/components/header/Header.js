import style from '../header/Header.module.scss';

function Header() {
  console.log(style);

  return (
    <header className="header" >
      <h1 className={style.active}>Lubimovka</h1>
    </header>
  );
}

export default Header;
