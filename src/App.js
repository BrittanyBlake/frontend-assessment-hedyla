import './App.css';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import SimpleCalc from './components/SimpleCalc';
import DistanceHome from './containers/DistanceHome';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/manual" exact component={SimpleCalc} />
        <Route path="/" exact component={DistanceHome} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
