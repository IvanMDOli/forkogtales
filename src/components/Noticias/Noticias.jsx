import { GridNoticias } from "./GridNoticias/GridNoticias"
import { ListaNoticias } from "./ListaNoticias/ListaNoticias"


export const Noticias = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
        <GridNoticias />
        <ListaNoticias />
    </main> 
  )
}