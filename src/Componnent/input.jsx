import React from "react";
const Input = ({Change,KeyPress,Input}) => {
   
    return(
  <input type="text" className="form-control" value={Input} onChange={Change} onKeyPress={KeyPress} placeholder="enter your text" data-testid="input" />
    )
}
export default Input;