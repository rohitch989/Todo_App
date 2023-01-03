import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TeamOmegaButton from './common/TeamOmegaButton';


class ListGroup extends Component {



  render() {
    const { todos, removeTodo, updateTodo } = this.props;

    return todos.length > 0 && todos.map((todo, index) => (
      <div key={index} className='todo-item'>
        <div>
          {todo.text}
        </div>
        <div className='icons'>
          <TeamOmegaButton className='delete-todo' text={<RiCloseCircleLine />} click={() => { removeTodo(todo) }} />
          <TeamOmegaButton className='edit-icon' text={<TiEdit />} click={() => { updateTodo(todo) }} />
        </div>

      </div>
    ));
  }
}

ListGroup.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func
}

export default ListGroup
