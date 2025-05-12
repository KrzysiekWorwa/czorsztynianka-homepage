import { Container } from './components/Container';
import Content from './components/Content';
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Container>
        <Content />
      </Container>
    </>
  );
}

export default App;
