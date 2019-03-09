import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  
  onDragStart = (ev, id, status) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData("id", id);
    ev.dataTransfer.setData("status", status)
  }
  

  render() {
    let className = ['Card'];
    if (this.props.status === 'backlog') {
      className.push('Card-grey');
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue');
    } else if (this.props.status === 'complete') {
      className.push('Card-green');
    }
    return (
      <div className={className.join(' ')} data-id={this.props.id} data-status={this.props.status}>
        <div className="Card-title" draggable onDragStart = {(e)=>this.onDragStart(e, this.props.id, this.props.status)} >{this.props.name}</div>
      </div>
    );
  }
}