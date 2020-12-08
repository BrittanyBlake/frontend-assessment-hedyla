import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Forms from './components/forms';
import DistanceHome from './containers/DistanceHome';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Forms} />
        <Route path="/auto" exact component={DistanceHome} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
