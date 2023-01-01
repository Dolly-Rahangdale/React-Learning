import React,{useMemo} from "react"

function UseMemoHook(){

    const users=[{
        id:1,
        name:'John'
    },{
        id:2,
        name:"Peter"
    },{
        id:3,
        name:"Richard"
    }]

    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')

    const handleText=(event)=>{
        setText(event.target.value)
    }

    const handleSearch=()=>{
        setSearch(text)
    }

    // const filteredData=useMemo(()=>users.filter((user)=>{
    //     console.log('hiiiiiiiii');
    //     return user.name.toLowerCase().includes(search.toLowerCase())
    // }),[search])

    const filteredData = useMemo(() => users.filter((user) => {
        console.log("HEllo");
        return user.name.toLowerCase().includes(search.toLowerCase());
    }), [search]);


    return(
        <div>
              <h1>Use Memo Hook!!!</h1>
              <input type="text" 
              className="border"
              onChange={handleText}/>

              <button type='button' 
              className="btn btn-info"
              onClick={handleSearch}>Search</button>

              <DisplayList userList={filteredData}/>
        </div>
    )
}

function DisplayList({userList}){

    return(
        <ul>
            {userList.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UseMemoHook