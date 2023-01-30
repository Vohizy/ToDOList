import "./App.css";
import React, { useState } from 'react'


function App() {
  

      const [value, setValue] = useState([])
      const [input,setInput] =useState();
      const [check,setCheck] = useState(false); 
      const [newTab,setNewTab] =useState([]); 
      
      const change = (e) => {

        setInput(e.target.value)
        
       
      }
      const keys=(e)=>{
        if(e.key==="Enter"){
          setValue((list)=>[...list,input])
          setInput("")
        }
      }
        
      const f=(e,key)=>{
        setCheck(true)
        const t = value.filter((value,index)=>index!==key)
        setNewTab(newTab.concat(e))
        setValue(t)
        
        
      }
      
      if(check===true){
        setCheck(false)
      }

   return (
       
   <div className="body">
   <div className="contenair">
    <div className="block-todo">
      <h2>ToDo</h2>
        <div className="todo">
          <div className="contains-todo">
            <input type="text" className="form-control" value={input} onChange={change} onKeyPress={keys} placeholder="enter your text" />
            <ul className="list">
              {value.map((values,index)=>(
                <li key={index}>
                  <div className="li-div">{values}
                  <input type="checkbox" onClick={()=>{f(values,index)}} checked={check}/> 
                  </div>
                </li> 
                
              ))}
            </ul>
          </div>
        </div>
      </div>

          <div className="block-toDone">
            <h2>Done</h2>
            <div className="todone">
              <ul className="list">
                  {newTab.map((g) => (
                  <li>
                    <div className="li-div">{g}</div>
                  </li>
                  ))}
              </ul>
           </div>
          </div>
    </div>
   </div>
    
  );
}

export default App;
