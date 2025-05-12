import Banner from './components/Banner';
import { Container } from './components/Container';
import Content from './components/Content';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Container>
        <Content />
      </Container>
    </>
  );
}

export default App;
