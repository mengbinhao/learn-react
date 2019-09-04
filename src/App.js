import React, {Component, Fragment} from 'react'
import './style.css'

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
          <label htmlFor="servive">add service:</label>
          <input id="servive" className="input" value={this.state.inputVal} onChange={this.changeVal}/>
          <button onClick={this.addService}>add service</button>
        </div>
        <ul>
            {
              this.state.services.map((item, index) => {
                return (
                  <li key={index+item}
                      onClick={this.deleteSerivce.bind(undefined, index)}
                  >
                    { item }
                  </li>
                )
              })
            }
        </ul>
      </Fragment>
    )
  }
  changeVal(e) {
    //console.log(this)
    //console.log(e)

    //does not work!!!
    //does not work!!!
    //does not work!!!
    //this.inputVal = e.target.value

    this.setState({
      inputVal: e.target.value
    })
  }
  addService() {
    this.setState({
      services: [...this.state.services, this.state.inputVal],
      inputVal: ''
    })
  }
  deleteSerivce(idx) {
    console.log(this)
    const tmp = this.state.services
    tmp.splice(idx, 1)

    //must not operate this.state.services directly!!!
    //must not operate this.state.services directly!!!
    //must not operate this.state.services directly!!!
    //this.state.services.splice(idx, 1)
    this.setState({
      services: tmp
      //services: this.state.services
    })
  }
}

export default App