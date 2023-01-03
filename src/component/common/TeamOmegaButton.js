import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


class TeamOmegaButton extends PureComponent {

  handleClick = e => {
    if (!this.props.click)
      return;
    this.props.click();
  }
  render() {
    const { type, text, className, id } = this.props;
    return <button type={type} onClick={this.handleClick} className={className} id={id}>
      {text}
    </button>
  }
}
TeamOmegaButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  handleClick: PropTypes.func
}
export default TeamOmegaButton
