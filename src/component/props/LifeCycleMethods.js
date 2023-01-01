import React from 'react';
import ComponentWillUnmount from './ComponentWillUnmount';

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
            number:0,
            toggle:true
        }
    }
    // componentDidMount(){
    //     console.log('Component Did Mount : '+this.state.number);
    // }
    // componentDidUpdate(){
    //     console.warn("You have Succefully update!!!");
    //     console.log('Component Did Update  : ' +this.state.number);

    //     if(this.state.number === 4) {
    //         this.setState({number : "Dolly Rahangdale"});
    //     }
    // }

    increment = () => {
        this.setState({number:this.state.number+1})
    }

    remove =() => {
        this.setState({toggle :! this.state.toggle})
    }

    render(){
        return(
            <div>
                <h1>Life Cycle Methods!!!</h1>
                <p>Number is: {this.state.number}</p>
                <button onClick={this.increment}>Add</button>
                {
                    this.state.toggle ?
                    <ComponentWillUnmount/> : null
                }
                <button onClick={this.remove}>Click here for unmount the component... </button>
                
            </div>
        )
    }

}

export default LifeCycleMethods