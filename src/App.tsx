

import { Container, Typography, Stack } from '@mui/material'
import './App.css'
import { Start } from './Start'

function App() {

  return (
    <main>
      <Container maxWidth="sm">
        <Stack spacing={2} direction="row">
          <Typography variant="h2" component="h1" gutterBottom>
            <h1>JS Quiz</h1>
          </Typography>
        </Stack>

        <Start/>
      </Container>
    </main>
  )
}

export default App
