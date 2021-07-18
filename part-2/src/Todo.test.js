import {render} from '@testing-library/react'; 
import Todo from './Todo';

test('smoke test', ()=>{
    render(<Todo task='something' remove={()=>console.log('removing')} />);
});


test('snapshot', ()=>{
    const rend = render(<Todo task='something' remove={()=>console.log('removing')}/>);
    expect(rend).toMatchSnapshot(); 
});