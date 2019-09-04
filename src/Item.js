import React, { Component } from 'react';
class Item extends Component {
  constructor(props){
    super(props)
    this.handler = this.handler.bind(this)
  }
  render() {
    return (
      <li onClick={this.handler}>{this.props.content}</li>
    )
  }
  handler() {
    this.props.deleteService(this.props.index)
  }
}

export default Item