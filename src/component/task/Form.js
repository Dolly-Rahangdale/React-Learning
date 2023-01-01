import React,{useState} from 'react'

function Form(){
    const [userReg, setUserReg] = useState({
        username:'',
        email:'',
        phone:'',
        password:''
    });

    const [reg, setReg] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);

        setUserReg({...userReg, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReg = {...userReg, id : new Date().getTime().toString()}

        setReg([...reg,newReg]);
        console.log(reg);
        // document.write(reg);
        // document.write("Hello");

        setUserReg({username:"", email:"", phone:"", password:""})
    }

    return(
        <>
          <center>
          <div className='container m-5 p-2 w-50 bg-light shadow'>
                <form name='myForm' className='border border-dark p-3 shadow' onSubmit={handleSubmit}>
                    <div className='d-flex gap-2'>
                        <div className='col-md-6'>
                            <label htmlFor='username' className='form-label'>username : </label>
                            <input type='text' className='form-control border' 
                            value={userReg.username}
                            onChange={handleInput}  
                            name='username' id='username'/>
                        </div>

                        <div className='col-md-6'>
                            <label htmlFor='email' className='form-label'>email : </label>
                            <input type='text' className='form-control border' 
                            value={userReg.email}
                            onChange={handleInput}  
                            name='email' id='email' />
                        </div>
                    </div>

                    <div className='d-flex gap-2'>
                        <div className='col-md-6'>
                            <label htmlFor='phone' className='form-label'>phone : </label>
                            <input type='text' className='form-control border' 
                            value={userReg.phone}
                            onChange={handleInput}  
                            name='phone' id='phone' />
                        </div>

                        <div className='col-md-6'>
                            <label htmlFor='password' className='form-label'>password : </label>
                            <input type='text' className='form-control border' 
                            value={userReg.password}
                            onChange={handleInput}  
                            name='password' id='password' />
                        </div>
                    </div>

                    <button type='submit' className='btn btn-info w-50 m-3 p-2' >Submit</button>
                </form>
           </div>
          </center>
        <div>
           <DisplayForm reg={reg} />
        </div>
           {/* <div className='container border border-dark'>
                {
                    reg.map((currentElement) => {
                const {id, username, email, phone, password} = currentElement;
                return (
                    <div  key={id}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{password}</p>
                    </div>
                )
            })
                }
           </div> */}
        </>
    )
}

function DisplayForm({reg}) {
   return(
    <center>
        <div className='container w-70'>{
            <div>
                <table className='border m-2 align-center bg-light shadow  '>
                    {/* <thead className='border border-dark p-1 m-1'>
                        <tr>
                            <th>username</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>password</th>
                        </tr>
                    </thead> */}
                    <tbody >
                        <div>{
                            reg.map((currentElement) => {
                            const {id, username, email, phone, password} = currentElement;
                            return (
                            <tr key={id}>
                                <td className='border border-dark p-1 m-1' > {username} </td>
                                <td className='border border-dark p-1 m-1' > {email} </td>
                                <td className='border border-dark p-1 m-1' > {phone} </td>
                                <td className='border border-dark p-1 m-1' > {password} </td>
                            </tr>)
                        })
                        }</div>
                    </tbody>
                </table>
            </div>
    }
    </div>
    </center>
   )
}

export default Form
