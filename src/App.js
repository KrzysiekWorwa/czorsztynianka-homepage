import Content from './components/Content';
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Partners from './components/Partners';
import BikeRental from './components/BikeRental';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Content />
          <Partners />
        </Route>
        <Route path="/Wypożyczalnia-rowerów">
          <BikeRental />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}
export default App;
