import {render} from "@testing-library/react"; 
import Box from './Box.js'; 


test('smoke test', ()=>{
    render(<Box backgroundColor='red' width='100' height='100' index={0} removeHandler={(i)=>console.log(i)}/>); 
});


test('snapshot', ()=>{
    const rend = render(<Box backgroundColor='red' width='100' height='100' index={0} removeHandler={(i)=>console.log(i)}/>); 
    expect(rend).toMatchSnapshot(); 
});