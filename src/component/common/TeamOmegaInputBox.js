import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


class TeamOmegaInputBox extends PureComponent {

  handleChange = e => this.props.handlerChange(e.target.value)

  render() {
    const { type, name, values, placeholder, className, id, focus } = this.props;

    return <input type={type} name={name} placeholder={placeholder} className={className} id={id} value={values} onChange={this.handleChange} autoFocus={focus} />
  }
}
TeamOmegaInputBox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  input: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  focus: PropTypes.bool,
  handleChange: PropTypes.func.isRequired
}

export default TeamOmegaInputBox;
