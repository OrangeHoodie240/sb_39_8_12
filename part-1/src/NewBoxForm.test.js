import {render} from '@testing-library/react';
import NewBoxForm from './NewBoxForm'; 



test('smoke test', ()=>{
    render(<NewBoxForm onSubmitHandler={()=>console.log('testing...1...2...3')} />); 
});

test('snapshot test', ()=>{
    const rend = render(<NewBoxForm onSubmitHandler={()=>console.log('testing...1...2...3')} />);
    expect(rend).toMatchSnapshot();
});


