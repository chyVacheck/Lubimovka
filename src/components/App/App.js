import Header from './../header/Header.js';
import Main from './../main/Main.js';
import Footer from './../footer/Footer.js';
import AboutProject from '../AboutProject/AboutProject.js';
import MainVideo from '../MainVideo/MainVideo.js';

const App = () => (  //предлагаю использовать такой стильный пацанский синтаксис
  <>
    {/* //* шапка */}
    <Header />
    {/* //* основная часть */}
    <Main>
      {/* //? Секция с Заглавием 1 секция */}

      {/* //? О проекте 2 секция */}
      <AboutProject />
      {/* //? Главное видео 3 секция */}
      <MainVideo />
      {/* //? Секция несколько видео 4 секция */}

      {/* //? Секция несколько фото 5 секция */}

      {/* //? Секция спектакли 6 секция */}

      {/* //? Секция пьессы 7секция */}

      {/* //? Секция персоны 8 секция */}

      {/* //? Секция с кнопкой/ссылкой 9 секция */}

      {/* //? Секция сотрудничество 10 секция */}

    </Main>
    {/* //* подвал */}
    <Footer />
  </>
);

export default App;
