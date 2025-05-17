import Content from './components/Content';
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Hero />
      <Content />
    </>
  );
}
export default App;
