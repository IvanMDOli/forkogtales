import React from 'react'

export const ListaNoticias = () => {
  return (
    <section className='w-full h-auto px-4 py-10 flex flex-col items-center justify-evenly bg-blue-900'>
        <div className='w-full p-5 pb-10'>
            <h2>Lista de Noticias</h2>
        </div>
        <div className='w-full'>
            <ul className='*:h-30 *:border-y-2 *:border-zinc-600 *:p-4'>
                <li>Noticia 1</li>
                <li>Noticia 2</li>
                <li>Noticia 3</li>
                <li>Noticia 4</li>
                <li>Noticia 5</li>
            </ul>
        </div>
    </section>
  )
}
