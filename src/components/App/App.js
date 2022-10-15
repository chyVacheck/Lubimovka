import Header from './../header/Header.js';
import Main from './../main/Main.js';
import Footer from './../footer/Footer.js';
import Title from '../title/Title';
import GreenPlace from '../GreenPlace/GreenPlace.js';

function App() {
  return (
    <>
      {/* шапка */}
      <Header />
      {/* основная часть */}
      <Main>
        <GreenPlace>
          <Title text="О проекте" /> {/*TODO этот заголовок должен поместиться потом в компонент ЗТ */}
        </GreenPlace>
      </Main>
      {/* подвал */}
      <Footer />
    </>
  );
}

export default App;
