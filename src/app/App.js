import styled from 'styled-components'
import { IconsHolder, BottomNav } from '../components'
import AppProvider from '../context'

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

function App() {
  return (
    <AppProvider>
      <AppWrapper>
        <IconsHolder />
        <BottomNav />
      </AppWrapper>
    </AppProvider>
  );
}

export default App;
