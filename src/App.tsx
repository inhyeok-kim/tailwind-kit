import React, { useState } from 'react';
import { TextInput } from './input/Inputs';

function App() {
  const [text, setText] = useState('');
  return (
    <div className='w-96 mt-2'>
      <TextInput initValue={text} onChange={setText}/>
    </div>
  );
}

export default App;
