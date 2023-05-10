import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer'
import {NavBar} from './componentes/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/productos/:categoriaId' element={<ItemListContainer />}/>
        <Route path='/producto/:itemId' element={<ItemDetailContainer />}/>
        <Route path='*' element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
