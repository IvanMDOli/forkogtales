import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Front } from '../components/Front/Front'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { Home } from '../components/Home/Home'
import { Colores } from '../components/Colores/Colores'
import { Noticias } from '../components/Noticias/Noticias'
import { Historia } from '../components/Historia/Historia'
import { Mapa } from '../components/Mapa/Mapa'

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/colores" element={<Colores />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/mapa" element={<Mapa />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}