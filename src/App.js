import React from 'react';
import './App.css';

//Functions remaining: Completed ToDo, Delete ToDo, Show All ToDo, Show Completed ToDo, Beautifying the ToDo

class ToDo extends React.Component{

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <div 
        className="todo" 
        style={{textDecoration: this.props.todo.isCompleted?'line-through':''}}
      >
        <button className='complete' onClick={this.handleClick}>Completed</button>
        {this.props.todo.isCompleted}
        {this.props.todo.text}
      </div>
    );  
  }
}

class ToDoForm extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      newToDo:'',
      isCompleted:false
    }; 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.newToDo === ''){
      alert('empty');
      return
    } 
    this.props.onFormSubmit(this.state);
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
          text: 'Learn React',
          isCompleted:false
        }
      ],
    };
  }

  addToDo = (statePrev) => {
    this.setState({
      todoList: [
        ...this.state.todoList, 
        {
          text: statePrev.newToDo, 
          isCompleted: statePrev.isCompleted
        }
      ] 
    });
  }

  completeToDo = (index) => {
    const setOfToDo = this.state.todoList;
    setOfToDo[index].isCompleted = true;
    this.setState({
      todoList: [...setOfToDo]
    })
  }

  render() {
    return (
      <div className="app">
        <div className='formLayout'>
          <ToDoForm onFormSubmit = {this.addToDo} />
        </div>
        <div className="todo-list">
          {this.state.todoList.map((todo, index) => (
            <ToDo 
              todo={todo} 
              key={index} 
              index={index} 
              onClick={this.completeToDo}
            />
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
