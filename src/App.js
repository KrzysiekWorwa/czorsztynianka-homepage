import Content from './components/Content';
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}
export default App;
