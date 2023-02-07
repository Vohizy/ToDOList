import { fireEvent, render, screen } from "@testing-library/react";
import  renderer from "react-test-renderer";
import List from "../list";



/* describe("list of input",() => {
    it("all list",() => {
        const tree = renderer.create(<List value={value} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
}) */
describe("test for the list component",()=>{
    const value = [
        "hello","world","!!!!"
    ]
    
    
    it('have any more in list',() => {
        
       const{getAllByTestId} = render(<List value={value} />)
        const selectElementToInteract = getAllByTestId("lists")
    
        expect(selectElementToInteract).toHaveLength(3)
    }) 
    it("input is exactily here",()=>{
        render(<List value={value}/>)
        const checks =screen.getByTestId("checke2")
        const selectElementToInteract = screen.getByRole('list')
        expect(selectElementToInteract).toBeInTheDocument()


        
    })
    it("there are in input type checkbox here",() => {
        render(<List value={value}/>)
        const getList = screen.getByTestId("checke2")
        expect(getList).toBeInTheDocument();
    })
     it("length of the array is decrement if i check",()=>{
       const mockCheck = jest.fn();
        render(<List value={value} f={mockCheck}/>)
        const checks = screen.getByTestId("checke1")
        fireEvent.click(checks)
        expect(mockCheck.mock.calls.length).toBe(1);


    })
    it('test list of snapshot',() => {
        const tree = renderer.create(<List value={value}/>).toJSON()
        expect(tree).toMatchSnapshot();
    }) 
})