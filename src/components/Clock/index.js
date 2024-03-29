import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  render() {
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="paragraph">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
