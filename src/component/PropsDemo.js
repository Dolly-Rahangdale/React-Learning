import React from "react"

function PropsDemo() {
    const massage = "Hello Props React"
    const massage1 = "This is Massage no 2"

    return(
        <div>
            <h1>Props Demo!!</h1>
            {/* <ChildComponent massage={massage}/> */}
            <ChildComponent massage={massage} massage1={massage1}/>
            {/* <ChildComponent massage1={massage1}/> */}
        </div>
    )
}

// function ChildComponent(Props) {
function ChildComponent({massage,massage1}) {
    return(
        <div>
            <h3>Child Component!!</h3>
            {/* <p>massage: {Props.massage}</p> */}
            <p>massage: {massage}</p>
            <p>massage1: {massage1}</p>
        </div>
    )
}
// function ChildComponent1(prp) {
//     return(
//         <div>
//             <h3>Child Component!!</h3>
//             {/* <p>massage: {Props.massage}</p> */}
//             <p>massage: {prp.massage1}</p>
//         </div>
//     )
// }
export default PropsDemo