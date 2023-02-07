import { fireEvent, render, screen } from "@testing-library/react"
import  renderer  from "react-test-renderer"
import Input from "../input"

describe('test for input',()=>{
    it("input there are a placeholder",() => {
        render(<Input />)
        const getInput = screen.getByTestId("input")
        expect(getInput).toHaveAttribute('placeholder', 'enter your text')
        
    })
    it('i put a word and input is react',() =>{
        render(<Input />)
        const getInput = screen.getByTestId("input")
        fireEvent.change(getInput,{target:{value:"qwert"}})
        const makeValueInInput = getInput.value
        expect(makeValueInInput).toBe("qwert")
    })
    it('prove when i press key Enter in input and a function reload',() => {
        const mock = jest.fn
        render(<Input KeyPress={mock}/>)
        const getInput = screen.getByTestId("input")
        fireEvent.keyPress(document ,{key : 'Enter'})
        expect(mock.call.length).toBe(1)
    })
    it('test of snapshot',() => {
        const mock = jest.fn
        const tree =  renderer.create(<Input Change={mock} KeyPress={mock} Input={mock}/>).toJSON() 
        expect(tree).toMatchSnapshot();
    })

})