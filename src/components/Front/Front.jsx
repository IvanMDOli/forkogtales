import { Link } from 'react-router-dom'
import logo from '/logo/logo.png'


export const Front = () => {


  return (
      <main className='*:z-1 *:relative flex flex-col items-center justify-center min-h-screen w-full before:content-[""] before:z-0 before:inset-[0px] before:absolute before:bg-[url(/backgrounds/fondo-madera-oscura.png)] before:bg-cover before:bg-center before:bg-no-repeat before:blur-sm before:shadow-2xs before:w-full before:h-full'>
        <div className='h-screen flex flex-col items-center justify-evenly flex-nowrap'>
          <div className='flex flex-col items-center justify-center w-5/8'>
            <Link className='select-none w-full flex items-center justify-center hover:*:scale-95 hover:*:drop-shadow-[0_0_10px_#ffd95a]' to={'/home'}><img className='select-none w-full object-cover duration-400' src={logo} alt="ForkogTales Logo" /></Link>
          </div>
          <div>
            <p className='text-[18px] text-white text-center text-shadow-[0_0_8px_#ffd700]'>Iniciá tu aventura... trolazo!!!</p>
          </div>
        </div>
      </main>
  )
}