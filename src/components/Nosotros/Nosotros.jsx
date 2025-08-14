import { HighlightUppercase } from '../../utils/HighlightUppercase/HighlightUppercase';

export const Nosotros = () => {

    document.querySelectorAll("h1").forEach(h1 => {
        h1.innerHTML = h1.textContent.replace(/([A-ZÁÉÍÓÚÑ])/g, '<span class="text-yellow-400 text-6xl">$1</span>');
     });
  return (
    <main>
        <section className='static flex-col items-center justify-center h-full w-full bg-zinc-900'>
            <div className='flex flex-col items-center justify-center w-full h-full border-b-4 border-amber-400 bg-zinc-900'>
                <div className='w-full h-screen relative overflow-hidden bg-black flex items-center justify-center pt-20'>
                    <div className="absolute inset-0 animate-stars"></div>
                    <div className="absolute inset-0 animate-twinkle"></div>
                    <h1 className='text-4xl z-10 text-amber-400 text-shadow-[0_0_5px_#FFFFFF] text-center select-none h1Nosotros'>Nuevos Comienzos</h1>
                </div>
                <div className='paperwall w-full relative overflow-hidden flex items-center justify-center py-20 px-80'>
                    <HighlightUppercase 
                        tag="p"
                        text="En el año 2019, previo a la pandemia del coronavirus, un domingo cualquiera me junté con un grupo de amigos que me había invitado a jugar Dungeons and Dragons (DnD). Hasta ese entonces, yo no sabía prácticamente nada de los juegos de rol, nunca había jugado a uno, ni tampoco me llamaban demasiado la atención, pero mi primer acercamiento al DnD lo cambió todo. Luego de horas de preparación, entre que me explicaran las reglas y creara mi primer personaje, la partida dio inicio. El Dungeon Master (el narrador de la historia) describió la escena, el lugar, los personajes que allí se encontraban y nos hizo una simple pregunta: “Ahora, ¿Qué hace cada uno?”. Entre confundido y abrumado, no supe bien qué contestar, porque no sabía cuáles eran mis opciones. ¿Debería dirigirme hacia algún lugar en específico? ¿Debería comprar alguna poción o equipo? ¿Con quién tengo que hablar? ¿Qué tanto puedo hacer? La respuesta era más sencilla de lo que me imaginaba, “Pueden hacer lo que quieran” dijo el DM. En ese momento me explotó la cabeza, estaba inmerso en un mundo de fantasía prácticamente sin limitaciones, sin interfaz de usuario, sin opciones predefinidas, sin diálogos inalterables, sin botones de ataque o de salto. Fui completamente libre en un mundo de fantasía y podía hacer lo que me diera la gana. Sin embargo, siempre es bueno tener en cuenta de que nuestras acciones tienen consecuencias, tanto en esta realidad como en cualquier otra. Hoy intento que nuevos jugadores tengan su primer acercamiento a este mundo, que queden fascinados al igual que lo hice yo, y que sean libres al menos por un rato, en una realidad donde ellos mismos son los protagonistas."
                    />
                </div>
            </div>
        </section>
    </main>
  )
}
