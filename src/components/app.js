import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_string: ''
    };
  }

  createNewTodo = (event, todo) => {
    event.preventDefault();
    this.props.addTodo(todo);
    this.setState({ todo_string: '' })
  }

  renderTodos = () => {
    let allTodos = [];
    if(this.props.todos){
      this.props.todos.map((todo, i) => {
        allTodos.push(
          <div className="list-group-item" key={i+1}>
            <li className="list-unstyled" key={i}><h4>{todo}</h4></li>
            <button 
              className="btn btn-sm btn-outline-danger" 
              key={todo}
              onClick={event => this.deleteTodo(event, i)}
            >
              mark completed
            </button>
          </div>
        );
      });
      return <ul className="list-group">{allTodos}</ul>
    }else{
      return ''
    }
    
  }

  deleteTodo = (event, todoIndex) => {
    event.preventDefault();
    this.props.removeTodo(todoIndex);
  }
  
  render() {
    return <div>
              <div className="col-md-12">
                <div className="row justify-content-center mt-5">
                  <div className="col-md-6">
                    <p className="display-4 text-center">Redux Todo App</p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <form onSubmit={event => this.createNewTodo(event, this.state.todo_string)}>
                      <div className="form-group">
                        <input className="form-control" placeholder="enter new todo" 
                          onChange={event => this.setState({ todo_string: event.target.value })}
                          value={this.state.todo_string} 
                        />
                      </div>
                      <div className="form-group">
                        <button className="btn btn-success form-control" type="submit">
                          Create new todo
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-4 text-center">
                    { this.renderTodos() }
                  </div>
                </div>
              </div>
            </div>;
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(
  mapStateToProps, { 
    addTodo, 
    removeTodo 
  }
)(App)