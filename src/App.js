import {useState} from 'react';
import styled from 'styled-components';
import MainRouter from './routes/MainRouter.jsx';

function App() {

  const [on] = useState(23);

  return (
    <FullLayout>
        <MainRouter/>
    </FullLayout>
  );
}

const FullLayout = styled.div `
    height: auto;
    background-color: #fafafa;
`

export default App;
