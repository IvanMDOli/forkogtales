import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import './Front.scss'

export const Front = () => {


  return (
      <section className='mainFront'>
        <div className='divInicio'>
          <div className='divLogo'>
            <Link to={'/home'}><img src={logo} alt="ForkogTales Logo" /></Link>
          </div>
          <p>Iniciá tu aventura... trolazo!!!</p>
        </div>
      </section>
  )
}