
import './styles/App.css'
import Sidenave from './components/SideNave'
import { Container, Typography} from '@mui/material'

function App() {


  return (
    <>
      <Sidenave/>
      <Container pt={5}>
        <Typography variant='h4'>Hello, World!</Typography>
      </Container>
    </>
  )
}

export default App
