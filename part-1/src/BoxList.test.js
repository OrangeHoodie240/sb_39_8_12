import {render, fireEvent} from '@testing-library/react'; 
import BoxList from './BoxList'; 

test('smoke test', ()=>{
    render(<BoxList />)
});

test('snapshot', ()=>{
    const rend = render(<BoxList />);
    expect(rend).toMatchSnapshot(); 
});


test('creates box/ deletes box', ()=>{
    const rend = render(<BoxList />);
    const color = rend.getByLabelText('Box Color', {exact: false});    
    const width = rend.getByLabelText('Width (# of Pixels)');
    const height = rend.getByLabelText('Height (# of Pixels)');     
    const btn = rend.getByText('Submit'); 

    fireEvent.change(color, {target: {value: 'red'}});
    fireEvent.change(width, {target: {value: '100'}});
    fireEvent.change(height, {target: {value: '100'}});
    fireEvent.click(btn); 

    const x = rend.queryByText('X'); 
    expect(x).toBeInTheDocument(); 

    fireEvent.click(x); 
    expect(x).not.toBeInTheDocument(); 


});