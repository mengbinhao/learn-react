import React, {Component, Fragment} from 'react'
import './style.css'
import Item from './Item'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    //here is data
    //here is data
    //here is data
    this.state = {
      inputVal: 'jack',
      services: []
    }

    this.changeVal = this.changeVal.bind(this)
    this.addService = this.addService.bind(this)
    this.deleteSerivce = this.deleteSerivce.bind(this)
  }
  render() {
    console.log(`App render`)
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
  UNSAFE_componentWillMount() {
    console.log(`App-UNSAFE_componentWillMount`)
  }
  componentDidMount() {
    console.log(`App-componentDidMount`)
    axios.get('https://www.easy-mock.com/mock/5d6f8287cc33f915329151eb/reactdemo/')
         .then(res => {
           this.setState({
             services: res.data.data
           })
         })
         .catch(err => {
           console.log(err)
         })
  }
  shouldComponentUpdate() {
    console.log(`App-shouldComponentUpdate`)
    return true
  }
  UNSAFE_componentWillUpdate() {
    console.log(`App-UNSAFE_componentWillUpdate`)
  }
  componentDidUpdate() {
    console.log(`App-componentDidUpdate`)
  }
}

export default App