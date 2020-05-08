import React, { Component } from 'react'
import TodoList from './component/TodoList'
import AddTodo from './component/AddTodo'
import Login from './component/Login';
import SignUp from './component/SignUp';
import {BrowserRouter,Route} from 'react-router-dom';


class App extends Component{
  render(){
    // const todos = this.props.todos;
    console.log(this.props.todos);
    return(
      <BrowserRouter>
          <div>
            <Route exact path="/" component={TodoList}/>
            <Route path="/add" component={AddTodo} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </div>
      </BrowserRouter>
    )
  }
}

export default App;