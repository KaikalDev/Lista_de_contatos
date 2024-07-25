import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './style/global'
import Home from './pages/Home'
import Hero from './container/hero'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])
function App() {
  return (
    <>
      <EstiloGlobal />
      <Hero />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
