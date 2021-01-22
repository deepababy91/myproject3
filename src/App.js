import React from 'react';
import './App.css';
import Todo from './Todo';
import Login from './Login';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Header from './Header'
import 'antd/dist/antd.css';


//Using HashRouter instead of BrowserRouter to avoid 404 error while refreshing pages using the github page site link
import { HashRouter as Router, Switch, Route,Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
        {/*I am using the same signup page as my home page and also as a navlink to avoid creating another homepage*/}
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
          <Route path="/contact" component={Contact} />
          {/*If anything write after the '/' then I need to redirect it to the sign up page */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
