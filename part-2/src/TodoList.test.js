import {render, fireEvent} from '@testing-library/react'; 
import TodoList from './TodoList'; 


test('smoke test', ()=>{
    render(<TodoList />);
});


test('snapshot', ()=>{
    const rend = render(<TodoList />);
    expect(rend).toMatchSnapshot(); 
});


test('creates/removes task', ()=>{
    const rend = render(<TodoList />);
    const input = rend.queryByLabelText('New Task', {exact: false});
    const btn = rend.queryByText('Submit');

    fireEvent.change(input, {target: {value: 'Finish This project'}}); 
    fireEvent.click(btn);

    const x = rend.queryByText('X'); 
    expect(x).toBeInTheDocument; 

    fireEvent.click(x); 
    expect(x).not.toBeInTheDocument; 
    
});