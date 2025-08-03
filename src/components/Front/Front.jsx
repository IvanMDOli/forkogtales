import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.jpg'
import './Front.scss'

export const Front = () => {


  return (
    <>
      <main className='mainFront'>
        <div className='inicio'>
          <div className='logo'>
            <Link to={'/home'}><img src={logo} alt="ForkogTales Logo" /></Link>
          </div>
          <p>Iniciá tu aventura... trolazo!!!</p>
        </div>
      </main>
    </>
  )
}