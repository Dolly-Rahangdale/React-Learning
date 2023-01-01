import React from 'react'

class ClassState extends React.Component {
    constructor(){
      super() 
      this.state = {number:2}
     }

    increament = () => {
          this.setState({ number: this.state.number + 1 })      
        }
    decreament = () => {
      this.setState({ number: this.state.number - 1 })
    }
          
      render() {
        return (
        <div>
          <h1>State Demo</h1>
          <p>Number is: {this.state.number}</p>
          <button className='border bg-info rounded p-1' type='button' 
            onClick={this.increament}>Increament
          </button> &nbsp;

          <button className='border bg-info rounded p-1' type='button' 
            onClick={this.decreament}>Decreament
          </button>

        </div>
      )
    }
}
export default ClassState
