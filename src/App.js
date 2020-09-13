import React from 'react';
import logo from './logo.svg';
import './App.css';

//Functions remaing: Completed ToDo, Delete ToDo, Show All ToDo, Show Completed ToDo, Beautifying the ToDo

class ToDoForm extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      newToDo:''
    }; 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.newToDo === ''){
      alert('empty');
      return
    } 
    this.props.onFormSubmit(this.state.newToDo);
    //this.setState({newToDo:''});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          className='input' 
          value={this.state.newToDo}
          onChange={e => this.setState({newToDo: e.target.value})}
        />
        <button className='submitBTN'>Add</button>
      </form>
    );
  }
}

class ToDoApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todoList: [
        {
          text: 'Learn React'
        }
      ],
    };
  }

  updateState = (newToDo) => {
    this.setState({
      todoList: [...this.state.todoList, {text: newToDo}] 
    });
  }

  render() {
    return (
      <div className="app">
        <div className='formLayout'>
          <ToDoForm onFormSubmit = {this.updateState} />
        </div>
        <div className="todo-list">
          {this.state.todoList.map((todo, index) => (
            <div className="todo" key={index}>{todo.text}</div>
          ))}
        </div>
      </div>
    );
  }
}

// Remove the App and make ToDoApp as a function. Task to be completed at last
function App() {
  return (
    <div className="App"> 
      <ToDoApp />
    </div>
  );
}

export default App;
