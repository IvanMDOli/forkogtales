import dec2 from '../../assets/decoratives/decorativo-calavera.png'
import { Post } from './Post/Post'

export const Home = () => {
  return (
    <main className='static flex flex-col items-center justify-center h-full w-full'>
      <Post />
      <section className='flex flex-col items-center justify-center px-5 py-20 w-full h-full border-t-4 border-b-4 border-amber-400'>
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
      <Post />
    </main>
  )
}
