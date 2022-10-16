import Header from './../header/Header.js';
import Main from './../main/Main.js';
import Footer from './../footer/Footer.js';
import ColoredPlace from '../ColoredPlace/ColoredPlace.js';
import ShiftedText from '../ShiftedText/ShiftedText.js';
import Paragraph from '../Parargaph/Paragraph.js';
import Container from '../Container/Container.js';

function App() {
  return (
    <>
      {/* шапка */}
      <Header />
      {/* основная часть */}
      <Main>
        <ColoredPlace>
          <Container maxWidth="720px" padding="80px 201px 120px 0px">
            <ShiftedText
              titleText="О проекте"
              text="За первый сезон проекта организаторы провели 17 мероприятий вместе с режиссёрами и актёрами московских театров: Театра.doc, Театрального Центра им. Вс. Мейерхольда, Гоголь-центра, Электротеатра «Станиславский», Ленкома."
              isFeature={true}
            />
          </Container>
        </ColoredPlace>
      </Main>
      {/* подвал */}
      <Footer />
    </>
  );
}

export default App;
