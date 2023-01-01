import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
export default function ApiCall() {

    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => response.data)
        .then(res => {
            setUserList(res)
            console.log('hyyyy');
        })
    }, [])

    const [data,setData] = useState({
        userId : "",
        title : "",
        body : ""
      }
    );

    // const post = {
    //   userId: 1,
    //   title: "Demo",
    //   body: "Test Post Api"
    // }

    // const sendData = (event) => {
    //   axios.post("https://jsonplaceholder.typicode.com/posts", post)   
    //   .then(response => response.data)
    //   .then(res =>{
    //     console.log(res)
    //     setData(res)
    //   })
    //   console.log("Hiiiii");
    // }
    const url = "https://jsonplaceholder.typicode.com/posts"
    const post = {
      userId: data.userId,
      title: data.title,
      body: data.body
    }
    
    const handleInput = (e) => {
      const newData = {...data}
      newData[e.target.name] = e.target.value
      setData(newData)
      // console.log(newData)
    } 

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post(url, {post})   
      .then(response => response.data)
      .then(res =>{
        console.log(res)
        setData(res)
      })
      console.log("Hiiiii");
    }

  return (
    <div className='row m-3'>
      <div className='col'>
          <h1> Api Call Test </h1>
        <ul>
          {
              userList.map((user,index) => (
                <li key={index}> {user.name} </li>
              ))
          }
        </ul> <br></br>
      </div>

      <div className='col'>
          <form onSubmit={handleSubmit }>
            <h1 className="fs-5 fw-bold">Form for Post data by user </h1> <br></br>

            <div className="col-md-6">
                  User Id : <input type="text" name="userId" value={data.userId} className='form-control border w-30 ' 
                onChange={handleInput}
                />

                Title : <input type="text" name="title" value={data.title} className='form-control border w-30 ' 
                onChange={handleInput}
                />

                Body : <input type="text" name="body" value={data.body} className='form-control border w-30 ' 
                onChange={handleInput}
                /> 
            </div>

            <br></br>

          <button type='button '
            className='btn btn-info m-2'
            // onClick={sendData}
            > Send </button>
          </form>
        {/* {JSON.stringify(data)} */}
      </div>

      
    </div>
  )
}
