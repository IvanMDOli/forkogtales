import './Noticias.scss'
import asd from "../../assets/posts/asd1.png"

export const Noticias = () => {
  return (
    <main className='mainNoticias'>
        <h1>Página de Noticias</h1>
        <div className='noticiasDiv1'>
          <img src={asd} alt="asd" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, quasi blanditiis commodi eum non sapiente voluptates, ratione placeat velit repellat omnis hic cum sequi doloremque. Suscipit sapiente esse obcaecati est!</p>
        </div>
    </main>
  )
}