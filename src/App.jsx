import { Route, Routes } from 'react-router-dom'
import ProductProvider from './context/ProductProvider'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Maghale from './pages/Maghale/Maghale'
import SaveMaghale from './pages/SaveMaghale/saveMaghale'
import DoreHa from './pages/DoreHa/DoreHa'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Maghale/:id' element={<Maghale/>}/>
          <Route path='/SaveMaghale' element={<SaveMaghale/>}/>
          <Route path='/DoreHa/:title' element={<DoreHa/>}/>
        </Routes>
      </ProductProvider>
    </ThemeProvider>
  )
}

export default App
