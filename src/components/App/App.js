import './App.css';

import Header from './../header/Header.js';
import Main from './../main/Main.js';
import Footer from './../footer/Footer.js';

function App() {
  return (
    <>
      {/* шапка */}
      <Header />
      {/* основная часть */}
      <Main />
      {/* подвал */}
      <Footer />
    </>
  );
}

export default App;
