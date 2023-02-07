import React from "react";
import '../App.css'
let List=({value,check,f})=>{
    
    return(
        <>
        <ul className="list" >
              {value.map((values,index)=>(
                <li key={index} data-testid="lists">
                  <div className="li-div">{values}
                  <input type="checkbox" onClick={()=>{f(values,index)}} checked={check} data-testid={`checke${index+1}`}/> 
                  </div>
                </li> 
                
              ))}
        </ul>
        </>
    )
}
export default List;