import { GridNoticias } from "./GridNoticias/GridNoticias"
import { ListaNoticias } from "./ListaNoticias/ListaNoticias"
import { noticiasData } from "./noticiasData"


export const Noticias = () => {

  const noticiaPrincipal = noticiasData.slice(0, 5);

  const noticiasViejas = noticiasData.slice(5);

  return (
    <main className='flex flex-col items-center justify-center w-full'>
        <GridNoticias noticias={noticiaPrincipal} />
        <ListaNoticias noticias={noticiasViejas} />
    </main> 
  )
}