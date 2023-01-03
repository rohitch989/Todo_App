import React, { Component } from 'react'
import TeamOmegaButton from './common/TeamOmegaButton';
import TeamOmegaInputBox from './common/TeamOmegaInputBox';
class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }

  }
  handleChange = value => {
    this.setState({
      input: value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: this.state.input
    });

    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='todo-form'>
        <TeamOmegaInputBox type='text' placeholder='Add a Todo' name='text' values={this.state.input} className='todo-input' handlerChange={this.handleChange} focus={true} />
        <TeamOmegaButton text='Create' className='todo-button' type="submit" />

      </form>
    )
  }
}

export default TodoForm;
