import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Front } from '../components/Front/Front'
import { NavBar } from '../components/Navbar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { Home } from '../components/Home/Home'

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
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}