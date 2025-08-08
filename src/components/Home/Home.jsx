import { Link } from 'react-router-dom'
import dec1 from '../../assets/decoratives/decorativo-leon.png'
import dec2 from '../../assets/decoratives/decorativo-calavera.png'

export const Home = () => {
  return (
    <main className='static flex flex-col items-center justify-center h-full w-full'>
      <section className='flex flex-col items-center justify-center px-5 pt-50 pb-20 w-full h-full bg-[url(/backgrounds/fondo-taberna.png)] bg-top bg-fixed bg-cover bg-no-repeat'>
        <div className='*:flex *:flex-col *:items-center *:justify-center *:w-full flex flex-col items-center justify-between w-7/10 h-full p-[5%] aspect-1195/1666 object-cover bg-[url(../src/assets/posts/contenedor-post.png)] bg-top bg-contain bg-no-repeat'>
          <div>
            <h1 className='text-red-800 select-none [-webkit-text-stroke:1px_#00000080]'>Bienvenido</h1>
          </div>
          <div>
            <p className='text-center text-zinc-500'>"Solo quien se atreve a lanzar el dado, <br />conoce el destino que le aguarda." <br />Tabernero de Forkog</p>
          </div>
          <div>
            <img className='w-1/2 select-none' src={dec1} alt="Decorativo Leon" />
          </div>
          <div>
            <p className='text-zinc-900 text-center'>Discover the world of Forkog Tales, where every story is a journey waiting to be explored.</p>
          </div>
          <div>
            <Link to='/mundo' className='px-4 py-2 text-yellow-500 bg-red-800 border border-black rounded hover:bg-red-700 font-serif text-lg'>Conocer más</Link>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center px-5 py-20 w-full h-full border-t-4 border-amber-400'>
        <div className='*:flex *:flex-col *:items-center *:justify-center *:w-full *:py-10 *:px-10 flex flex-col items-center justify-between h-full w-full'>
          <div>
            <h2 className='text-2xl text-red-800'>Explora nuestras secciones</h2>
          </div>
          <div>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod impedit ipsam optio rem beatae enim in, nesciunt, obcaecati omnis aliquam facere! Inventore natus odio architecto, odit delectus harum ullam voluptatibus.</p>
          </div>
          <div>
            <img className='w-1/4 select-none drop-shadow-xl/100' src={dec2} alt="Decorativo Calavera" />
          </div>
        </div>
      </section>
    </main>
  )
}
