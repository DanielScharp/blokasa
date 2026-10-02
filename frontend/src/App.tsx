import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home/Home'
import Privacidade from './pages/Privacidade/Privacidade'
import Produto from './pages/Produto/Produto'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos/:slug" element={<Produto />} />
          <Route path="privacidade" element={<Privacidade />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
