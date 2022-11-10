import './App.scss';

import {Navbar, Gyik} from './components';
import {Account} from './containers';
import {Home, Informations, MoreInformation, Kapcsolat, News, Rules, MoreRules, ANew} from './containers';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/account">
            <Account/>
          </Route>

          <Route exact path="/info">
            <MoreInformation/>
          </Route>

          <Route exact path="/morerules">
            <MoreRules/>
          </Route>

          <Route exact path="/gyik">
            <Gyik/>
          </Route>

          <Route path="/news/:id">
            <ANew />
          </Route>

          <Route exact path="/">
            <Navbar />
            <Home />
            <Informations />
            <News />
            <Rules />
            <Kapcsolat />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

//gyakori kerdesek