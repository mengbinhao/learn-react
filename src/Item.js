import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Item extends Component {
  constructor(props){
    super(props)
    this.handler = this.handler.bind(this)
  }
  render() {
    return (
      <li onClick={this.handler}>{this.props.jsname}---{this.props.content}</li>
    )
  }
  handler() {
    this.props.deleteService(this.props.index)
  }
}

Item.propTypes = {
  jsname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteService: PropTypes.func
}

Item.defaultProps = {
  jsname: 'Stranger'
}

export default Item