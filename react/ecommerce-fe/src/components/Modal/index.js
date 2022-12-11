import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modalContainer">
        <div class="modal" id="modal">
        <div class="actions">
            <button class="toggle-button" onClick={this.onClose}>
              close
            </button>
          </div>
          {/* <h2>Modal Window</h2> */}
          <div class="content">{this.props.children}</div>
          
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};