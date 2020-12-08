import './App.css';
import {
  Switch, Route, Redirect, NavLink,
} from 'react-router-dom';
import Forms from './components/forms';
import DistanceHome from './containers/DistanceHome';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <NavLink to="/">
        <Nav />
      </NavLink>
      <Switch>
        <Route path="/" exact component={Forms} />
        <Route path="/auto" exact component={DistanceHome} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
