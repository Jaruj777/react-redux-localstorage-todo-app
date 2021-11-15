import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './App.css';
import Home from './containers/Home/Home'
import Todos from './containers/Todos/Todos'
import Auth from './containers/Auth/Auth'


function App() {
  const {isAuthenticated, userName} = useSelector(state=>state.auth)
  return (
    <div className="App">
      <div className="container">
     {!isAuthenticated
       ?<Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Auth} />
          <Route path="/register" component={Auth} />
          <Redirect to='/' />
        </Switch>
        :<Switch>
          <Route path="/todos/:userName" component={Todos} />
          <Redirect to={`/todos/${userName}`} />
        </Switch>
     }
      </div>
    </div>
  );
}

export default App;
