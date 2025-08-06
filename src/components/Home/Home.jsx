import './Home.scss'
import dec1 from '../../assets/decoratives/decorativo-leon.png'

export const Home = () => {
  return (
    <main className='mainHome'>
      <div className='divHome'>
        <h1 className='titleHome'>Bienvenido</h1>
        <img className='decorativeHome' src={dec1} alt="Decorative Lion" />
        <p className='pHome'>"Solo quien se atreve a lanzar el dado, conoce el destino que le aguarda." <br />— Tabernero de Forkog</p>
        <p className='textHome'>Discover the world of Forkog Tales, where every story is a journey waiting to be explored.</p>
        <button className='buttonHome'>Get Started</button>
      </div>
    </main>
  )
}
