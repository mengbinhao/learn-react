import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Item extends Component {
  constructor(props){
    super(props)
    this.handler = this.handler.bind(this)
  }
  render() {
    console.log(`Item render`)
    return (
      <li onClick={this.handler}>{this.props.jsname}---{this.props.content}</li>
    )
  }
  handler() {
    this.props.deleteService(this.props.index)
  }
  UNSAFE_componentWillMount() {
    console.log(`Item-UNSAFE_componentWillMount`)
  }
  componentDidMount() {
    console.log(`Item-componentDidMount`)
  }
  UNSAFE_componentWillReceiveProps() {
    console.log(`Item-UNSAFE_componentWillReceiveProps`)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Item-shouldComponentUpdate`)
    console.log(`---------${nextProps.content}`)
    console.log(`+++++++++${this.props.content}`)
    return nextProps.content !== this.props.content
  }
  UNSAFE_componentWillUpdate() {
    console.log(`Item-UNSAFE_componentWillUpdate`)
  }
  componentDidUpdate() {
    console.log(`Item-componentDidUpdate`)
  }
  componentWillUnmount() {
    console.log(`Item-componentWillUnmount`)
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