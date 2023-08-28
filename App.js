import logo from './logo.svg';
import './App.css';
import UserInfo from './UserInfo';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddDeviceForm from './Watercap';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
              <AddDeviceForm />
            </Route>
            <Route path="/create">
              <UserInfo />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;