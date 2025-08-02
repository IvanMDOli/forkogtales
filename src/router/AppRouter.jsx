//import { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
//import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
//import { Login } from '../components/Login/Login'
//import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
//import { NotFound } from '../components/NotFound/NotFound'
import { Footer } from '../components/Footer/Footer'
//import { UserContext } from '../context/UserContext'
//import { Profile } from '../components/Profile/Profile'
//import { Signup } from '../components/Signup/Signup'
import './AppRouter.scss'


export const AppRouter = () => {

  //const { user } = useContext(UserContext)

  return (
    
    <BrowserRouter>

      <NavBar />

      <main className='mainRouter'>

        <Routes>

          {/*<Route path="/" element={<ItemListContainer />} />

          <Route path="/profile" element={user.logged ? <Profile /> : (<Navigate to={"/login"} />)}/>
          <Route path="/login" element={user.logged ? (<Navigate to={"/profile"} />) : <Login />}/>
          <Route path="/signup" element={user.logged ? (<Navigate to={"/profile"} />) : <Signup />} />

          <Route path="/products/:categoryId" element={<ItemListContainer />} />
          <Route path="/itemdetail/:itemId" element={<ItemDetailContainer />} />

          <Route path="/not-found" element={<NotFound />} />

          <Route path="*" element={<Navigate to={"/not-found"} />} />*/}

        </Routes>
        
      </main>

      <Footer />

    </BrowserRouter>

  )
}
