import React from 'react';
import ReactDOM from 'react-dom';

const modalOverlay = props => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
    </div>
  )

  return ReactDOM(content, document.getElementById('modal-hook'))
}

const modal = props => {

}

export default modal