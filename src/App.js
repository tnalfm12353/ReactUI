import styled from 'styled-components';
import MainRouter from './routes/MainRouter.jsx';

function App() {

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
