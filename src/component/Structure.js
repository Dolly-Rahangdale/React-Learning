import React,{useState} from 'react'
// import PropsInp from './homepage/PropsInp'

function Structure() {
  
  const userObj = {
    firstName: "",
    lastName: ""
  }

  const [user,setUser] = useState(userObj)
  const [userList,setUserList] = useState([])

  const handleInput = (event) => {
    setUser({...user,[event.target.name] : event.target.value})
  }
  const addData = () => {
    setUserList([...userList,user])
    document.getElementById('myForm').reset()
  }
 
  return (
      <div className='container w-95 m-10'>
        <form id="myForm">
            <div className="mb-3 col-md-6">
                <label htmlFor="firstname" className="form-label">First Name: </label>
                <input type="text" name='firstname' className="form-control" id="firstname" onChange={handleInput} />
            </div>
            <div className="mb-3 col-md-6">
                <label htmlFor="lastname" className="form-label">Last Name: </label>
                <input type="text" name='lastname' className="form-control" id="lastname" onChange={handleInput} />
            </div>

            <div className='col-md-6'>
                <button type="button" className="btn btn-primary text-dark w-50" onClick={addData}>Submit</button>
            </div> <br/>
        </form>
          <SubmitBut userList = {userList} />
      </div>    
  )
}

function SubmitBut({userList}){
  return(
      <div>
          <ul>
              {
                userList.map((user,index) => (
                    <li key = {index}> {user.firstname + " " + user.lastname} </li>
                ))
              }
          </ul>
      </div>
  )
}
export default Structure
