import {useState} from 'react';

function App() {

  const [on] = useState(23);

  return (
    <div>{on}</div>
  );
}

export default App;
