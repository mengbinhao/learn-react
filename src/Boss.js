import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

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
        <CSSTransition
          in={ this.state.isShow }
          timeout={2000}
          classNames="boss-node"
          unmountOnExit
        >
          <div>animating...</div>
        </CSSTransition>
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