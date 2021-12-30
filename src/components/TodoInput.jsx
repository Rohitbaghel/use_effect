import { useState,useEffect } from "react"

export const TodoInput = () => {

    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const [page,setPage] = useState(1)
    useEffect(() => {
        getTodo()
    },[page])
    const getTodo = async () => {
        fetch(`http://localhost:3001/todo?_page=${page}&_limit=3`).then(res => 
             res.json()
        ).then(data => {
            //  console.log(data)
            setTodo(data)
         })
       
      };
    return (
        <div>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Type here..." />
            <button onClick={() => {
                const payload = {
                    title: text,
                    status:false
                }
                fetch("http://localhost:3001/todo  ", {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(() => {
                    getTodo()
                })

                // setTodo([...todo,text]);
            }}>Add Todo</button>
            
            {todo.map((e) => (

                <div>{e.title}</div>
            )
            )}
            <button disabled={this.state.page.length - 1} onClick={()=>{setPage(page+1)}}>Next</button>
            <button disabled={page === 1} onClick={()=>{setPage(page-1)}}>Prev</button>
        </div>
    )
}
