import Banner from './components/Banner';
import { Container } from './components/Container';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Container></Container>
    </>
  );
}

export default App;
