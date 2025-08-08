

export const Noticias = () => {
  return (
    <main className='flex items-center justify-center'>
        <div className='*:flex *:items-center *:justify-center *:bg-blue-600 *:border *:border-gray-400 *:transition *:duration-300 *:ease-in-out *:hover:border-amber-400 *:hover:bg-blue-500self-center pt-55 pb-20 grid grid-cols-3 gap-4 h-screen w-6/9'>
            <div className='col-span-2 row-span-2'>
                <p className='text-center'>Noticia 1</p>
            </div>
            <div>
                <p className='text-center'>Noticia 2</p>
            </div>
            <div>
                <p className='text-center'>Noticia 3</p>
            </div>
            <div className='col-span-2'>
                <p className='text-center'>Noticia 4</p>
            </div>
            <div>
                <p className='text-center'>Noticia 5</p>
            </div>
        </div>
    </main> 
  )
}