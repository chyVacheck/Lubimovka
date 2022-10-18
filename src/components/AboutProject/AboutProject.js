import ColoredPlace from '../ColoredPlace/ColoredPlace';
import Container from '../Container/Container';
import ShiftedText from '../ShiftedText/ShiftedText';

const AboutProject = () => (
  <ColoredPlace>
    <Container maxWidth="720px" padding="80px 201px 120px 0px">
      <ShiftedText
        titleText="О проекте"
        text="За первый сезон проекта организаторы провели 17 мероприятий вместе с режиссёрами и актёрами московских театров: Театра.doc, Театрального Центра им. Вс. Мейерхольда, Гоголь-центра, Электротеатра «Станиславский», Ленкома."
        isFeature={true}
      />
    </Container>
  </ColoredPlace>
);

export default AboutProject;
