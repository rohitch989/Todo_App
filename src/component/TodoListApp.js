import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListGoup from './ListGroup';
import TodoForm from './TodoForm';
import Modal from './common/TeamOmegaModalPopup';

toast.configure();
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      modal: false,
      editableTodo: { text: '', id: null },
      props: []

    };
  }


  addTodo = todo => {
    if (!todo.text)
      return

    const newTodos = [todo, ...this.state.todos];
    this.setState(prev => ({ editableText: { ...prev.editableText }, todos: newTodos, modal: prev.modal }))
    toast.success(`"${todo.text}" ITEM IS ADDED !`, { autoClose: 1000 });

  }

  removeTodo = rtodo => {
    const removeArr = this.state.todos.filter(todo => todo.id !== rtodo.id)

    this.setState(prev => ({ editableText: { ...prev.editableText }, todos: [...removeArr], modal: prev.modal }));
    toast.error(` ITEM WITH NAME "${rtodo.text}" IS DELETED !`, { position: toast.POSITION.TOP_LEFT, autoClose: 2000 });
  }
  updateTodo = (todo) => {

    this.setState(prev => ({ editableTodo: todo, todos: [...prev.todos], modal: false }), () => {
      this.setState(prev => ({ editableTodo: { ...prev.editableTodo }, todos: [...prev.todos], modal: true }))
    })
    // this.setState(prev => prev.todos.map(item => (item.id === todoId ? newValue : item)))
  }
  update = (todoId, text) => {
    if (!text) {
      this.setState(prev => ({ editableTodo: { id: null, text: '' }, todos: [...prev.todos], modal: false }))
      return;
    }
    let it = {
      id: todoId,
      text: text
    }
    if (text === this.state.editableTodo.text)
      toast.warn(`"${text}" ITEM IS NOT UPDATED !`, { position: toast.POSITION.TOP_CENTER, autoClose: 3000 });
    else
      toast.success(`ITEM WITH NAME "${this.state.editableTodo.text}" IS UPDATED TO ${text}`, { autoClose: 1000 });

    this.setState(prev => ({ editableTodo: { id: null, text: '' }, isChanged: false, todos: [...prev.todos.map(item => (item.id === todoId ? it : item))], modal: false }))

  }

  render() {



    return <div className='todo-list'>
      {this.state.modal === true ? <Modal editableTodo={this.state.editableTodo} isUpdate={this.update} /> : null}
      {this.state.isChanged ? alert("Not Updated") : null}
      <TodoForm onSubmit={this.addTodo} />
      <div className='todo-items'><ListGoup todos={this.state.todos} removeTodo={this.removeTodo} updateTodo={this.updateTodo} /></div>

    </div>



  }
}

export default TodoList
