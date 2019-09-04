import React, {Component, Fragment} from 'react'
import './style.css'
import Item from './Item'

class App extends Component {
  constructor(props) {
    super(props)
    //here is data
    //here is data
    //here is data
    this.state = {
      inputVal: 'jack',
      services: ['基础按摩', '精油推背']
    }

    this.changeVal = this.changeVal.bind(this)
    this.addService = this.addService.bind(this)
    this.deleteSerivce = this.deleteSerivce.bind(this)
  }
  render() {
    return (
      <Fragment>
        {/* comment1 */}
        {
          //comment2
        }
        <div>
          <label htmlFor="servive">add service: </label>
          <input id="servive"
                 className="input"
                 value={this.state.inputVal}
                 onChange={this.changeVal}
                 ref={val => this.inputVal = val}
          />
          <button onClick={this.addService}>add service</button>
        </div>
        <ul ref={ul => this.ul = ul}>
          {
            this.state.services.map((item, index) => {
              return (
                <Item key={index + item}
                      // jsname='zls'
                      content={item}
                      index={index}
                      deleteService={this.deleteSerivce}
                />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  changeVal() {
    this.setState({
      //inputVal: e.target.value
      inputVal: this.inputVal.value
    })
  }
  addService() {
    this.setState({
      services: [...this.state.services, this.state.inputVal],
      inputVal: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
    //setState aync invoke, added in event loop
    //console.log(this.ul.querySelectorAll('li').length)
  }
  deleteSerivce(idx) {
    const tmp = this.state.services
    tmp.splice(idx, 1)
    this.setState({
      services: tmp
    })
  }
}

export default App