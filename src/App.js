import Content from './components/Content';
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Hero />
      <Content />
      <Partners />
      <Footer />
    </>
  );
}
export default App;
