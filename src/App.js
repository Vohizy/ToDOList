import "./App.css";
import React, { useState } from 'react'
import List from "./Componnent/list";
import Input from "./Componnent/input";


function App() {
  

      const [value, setValue] = useState([])
      const [input,setInput] =useState();
      const [check,setCheck] = useState(false); 
      const [newTab,setNewTab] =useState([]); 
      
      const change = (e) => {

        setInput(e.target.value)
        
       
      }
      const keys=(e)=>{
        if(e.key==="Enter"&&input!==""){
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
            <Input Change={change} KeyPress={keys} Input={input}/>
            <List value={value} check={check} f={f} />
          </div>
        </div>
      </div>

          <div className="block-toDone">
            <h2>Done</h2>
            <div className="todone">
              <List value={newTab}/>
              {/* <ul className="list">
                  {newTab.map((g) => (
                  <li>
                    <div className="li-div">{g}</div>
                  </li>
                  ))}
              </ul> */}
           </div>
          </div>
    </div>
   </div>
    
  );
}

export default App;
