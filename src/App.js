import './App.css';
import { Landing, SignUp } from '@pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/signup' exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
