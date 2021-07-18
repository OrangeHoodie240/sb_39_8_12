import {render} from '@testing-library/react'; 
import NewTodoForm from './NewTodoForm';

test('smoke test', ()=>{
    render(<NewTodoForm updateParent={()=>console.log('testing')} />);
});


test('snapshot', ()=>{
    const rend = render(<NewTodoForm updateParent={()=>console.log('testing')}/>);
    expect(rend).toMatchSnapshot(); 
});