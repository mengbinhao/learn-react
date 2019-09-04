import React, { Component } from 'react'

class Boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
    this.toggle = this.toggle.bind(this)
  }
  render() {
    return (
      <div>
        <div>animating...</div>
        <div>
          <button onClick={ this.toggle }>click me</button>
        </div>
      </div>
    )
  }
  toggle() {
    this.setState({
      isShow: this.state.isShow?false:true
    })
  }
}

export default Boss