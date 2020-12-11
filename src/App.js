import './App.css';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import SimpleCalc from './components/SimpleCalc';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ComplexCalcHome from './containers/ComplexCalcHome';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/manual" exact component={SimpleCalc} />
        <Route path="/" exact component={ComplexCalcHome} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
