import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Products } from './components/Products'





function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route
            path='/'
            element={<Products />}
          />
            {/* <Route
            path='/cart'
            element={<Cart />}
          /> */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
