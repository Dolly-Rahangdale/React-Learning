import React, {Component} from "react";

class ComponentWillUnmount extends Component {

    componentWillUnmount(){
        console.warn("You have been Succefully Removing!!")
    }
  

    render() {
        return (
        <div>
        <br></br><br></br>
            <h1> Component Will Unmount</h1>
            <ul>
                <li>Component</li>
                <li>Will</li>
                <li>Unmount</li>
            </ul>
        </div>
        );
    }
}

export default ComponentWillUnmount;
