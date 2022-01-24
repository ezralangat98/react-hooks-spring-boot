
import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListUsersComponent from './Components/ListUsersComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddUserComponent from './Components/AddUserComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <Switch>
            <Route exact path = '/' component = {ListUsersComponent} ></Route>
            <Route path = '/users' component = {ListUsersComponent} ></Route>
            <Route path = '/add-user' component = {AddUserComponent} ></Route>
            <Route path = '/edit-user/:id' component = {AddUserComponent} ></Route>
          </Switch>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
