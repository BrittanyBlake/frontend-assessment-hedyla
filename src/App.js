import './App.css';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import Forms from './components/forms';
import DistanceHome from './containers/DistanceHome';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/" exact component={Forms} />
        <Route path="/auto" exact component={DistanceHome} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
