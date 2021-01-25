import React from 'react';
import './App.css';
import Todo from './Todo';
import Signup from './Signup';
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
        {/*I am using the same signup page component as my home page('/') and also as a navlink('/signup) to avoid creating another homepage component*/}
          <Route exact path="/" component={Signup}/>
          <Route path="/signup" component={Signup} />
          <Route path="/todo" component={Todo} />
          <Route path="/contact" component={Contact} />
          {/*If anything other than the above mentioned paths write after the '/' then I need to redirect it to the '/' page which I set to signup page here */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
