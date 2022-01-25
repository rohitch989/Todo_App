import React, { Component } from 'react'
import Modal from 'react-modal'
import TeamOmegaButton from './TeamOmegaButton';
import TeamOmegaHeader from './TeamOmegaHeader';
import TeamOmegaInputBox from './TeamOmegaInputBox';
Modal.setAppElement('#root');
class modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: this.props.editableTodo.text,
      isOpen: true,

    }

  }

  handleChange = value => {
    this.setState({
      input: value
    })
  }

  handleSubmit = e => {
    // e.preventDefault();
    this.props.isUpdate(this.props.editableTodo.id, this.state.input);
    this.setState({ input: '', isOpen: false })

  }

  handleClose = e => {
    this.props.isUpdate(null, null)
    this.setState({ input: '', isOpen: false })
  }
  render() {
    return (
      <Modal isOpen={this.state.isOpen} className='modal' onRequestClose={() => this.setState(prev => ({ input: prev.input, isOpen: false }))}>
        <div className='model-box'>
          <TeamOmegaHeader text='Update' type="h1" />
          <form className='modal-form' onSubmit={this.handleSubmit}>
            <TeamOmegaInputBox type='text' placeholder='Update a Todo' values={this.state.input} handlerChange={this.handleChange} focus={true} />

            <div className='model_button'>
              <TeamOmegaButton text='OK' type='submit' click={this.handleSubmit} className="model_submit cadetblue" />
              <TeamOmegaButton text='Close' click={this.handleClose} className="model_submit slate_grey" />
            </div>

          </form>
        </div>

      </Modal>


    )
  }
}

export default modal
