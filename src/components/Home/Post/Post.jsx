import { Link } from 'react-router-dom'
import dec1 from '../../../assets/decoratives/decorativo-leon.png'

export const Post = () => {
  return (
    <section className='flex flex-col items-center justify-center px-5 py-20 w-full h-full'>
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
  )
}
