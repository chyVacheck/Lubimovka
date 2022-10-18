import Header from './../header/Header.js';
import Main from './../main/Main.js';
import Footer from './../footer/Footer.js';
import AboutProject from '../AboutProject/AboutProject.js';
import MainVideo from '../MainVideo/MainVideo.js';

const App = () => (  //предлагаю использовать такой стильный пацанский синтаксис
  <>
    {/* шапка */}
    <Header />
    {/* основная часть */}
    <Main>
      <AboutProject />
      <MainVideo />
    </Main>
    {/* подвал */}
    <Footer />
  </>
);

export default App;
