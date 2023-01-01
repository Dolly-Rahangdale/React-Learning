import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function PutMethod() {

    const [userList, setUserList] = useState([]);
    const apiEndPoint = "https://jsonplaceholder.typicode.com/posts"
    
    const [user, setUser] = useState({
        userId : "",
        title : "",
        body : ""
      });

    useEffect(()=> {
        const getPosts = async () =>{
            await axios.get(apiEndPoint)
            .then(res =>{
                setUserList(res.data)
            })
        }
        getPosts();
    }, []);


    const handleInput = (e) => {
        const newData = {...user}
      newData[e.target.name] = e.target.value
      setUser(newData)
    }
    
    const post = {
        userId: user.userId,
        title: user.title,
        body: user.body
      }

    const addPost = async (e) => {
        e.preventDefault();
        await axios.post(apiEndPoint, post)
        // .then(res =>{
            // setUserList(res.data)
            setUserList([post, ...userList]);
        // })
    }

    const handleUpdate = async (item) => {
        item.userId = "2";
        item.title = "Updated";
        item.body = "This is Body";

        // item.userId = user.userId;
        // item.title = user.title;
        // item.body = user.body;

        await axios.put(apiEndPoint + "/" + item.id);
        const postsClone = [...userList];
        const index = postsClone.indexOf(item);
        postsClone[index] = { ...item };
        setUserList(postsClone);
    };

    const handleDelete = async (item) => {
        await axios.delete(apiEndPoint + "/" + item.id + item);
        setUserList(userList.filter((u) => u.id !== item.id));
    }

    if (userList.length === 0) 
    return(
        <h2> There is No Post Available in Database... </h2>
    )


  return (
    <>
        <div className="container">
            
            <form className='m-1'>
            <h1 className="fs-5 fw-bold">Form for Post data by user </h1> <br></br>

            <div className="row m-1">
                <div className='col'>
                    User Id : <input type="text" name="userId" value={user.userId} className='form-control border w-30 ' 
                    onChange={handleInput}
                    />
                </div>

                <div className='col'>
                    Title : <input type="text" name="title" value={user.title} className='form-control border w-30 ' 
                    onChange={handleInput}
                    />
                </div>

                <div className='col'>
                    Body : <input type="text" name="body" value={user.body} className='form-control border w-30 ' 
                    onChange={handleInput}
                    /> 
                </div>
            </div>

            <div className='m-3'>
                <center>
                    <button
                    onClick={addPost} className='btn btn-success text-light btn-sm w-40 '
                    >Add Post</button>
                </center>
            </div>
         
          </form>

            <h2 className='m-1 fs-5 text-secondary'>There are {userList.length} post in the DataBase </h2>
            <table className='table border table-striped'>
                <thead>
                    <tr className='table-success'>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th colSpan='2' className='text-center'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((item,index)=>(
                            <tr key={index}>
                                <td> {item.id} </td>
                                <td> {item.title} </td>
                                <td> {item.body} </td>
                                <td> 
                                    <button
                                        onClick={() =>handleUpdate(item)}
                                        className='btn btn-primary btn-sm'
                                    > Update </button>
                                </td>
                                <td> 
                                    <button
                                     className='btn btn-danger btn-sm'
                                     onClick={() =>handleDelete(item)}
                                    > Delete </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    </>
  )
}
