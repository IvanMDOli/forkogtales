import { useEffect, useRef } from 'react';
import { HighlightUppercase } from '../../utils/HighlightUppercase/HighlightUppercase';

export const Nosotros = () => {
    const particlesRef = useRef(null);

    useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particleNum = 100;
    const particleBaseSize = 8;

    for (let i = 0; i < particleNum; i++) {
      const circleContainer = document.createElement('div');
      const circle = document.createElement('div');

      const size = Math.random() * particleBaseSize;
      circleContainer.className = 'circle-container';
      circleContainer.style.width = `${size}px`;
      circleContainer.style.height = `${size}px`;

      // Variables CSS para animación
      const fromX = Math.random() * 100;
      const fromY = Math.random() * 100;
      const toX = Math.random() * 100;
      const toY = Math.random() * -50;
      const dur = 28000 + Math.random() * 9000;
      const delay = Math.random() * 37000;

      circleContainer.style.setProperty('--from-x', `${fromX}vw`);
      circleContainer.style.setProperty('--from-y', `${fromY}vh`);
      circleContainer.style.setProperty('--to-x', `${toX}vw`);
      circleContainer.style.setProperty('--to-y', `${toY}vh`);
      circleContainer.style.setProperty('--dur', `${dur}ms`);
      circleContainer.style.setProperty('--delay', `${delay}ms`);

      circle.className = 'circle';
      circle.style.animationDelay = `${Math.random() * 4000}ms`;

      circleContainer.appendChild(circle);
      container.appendChild(circleContainer);
    }
  }, []);

  const info = [
        { h2: "¿De qué se trata este proyecto “Forkog Tales”?", p: "Es una forma de jugar Dungeons and Dragons como nunca antes. Se trata de un mundo compartido por TODOS los jugadores de la comunidad, en el que cada uno dejará huella y modificará el entorno a su paso." },
        { h2: "¿Necesito saber jugar Dungeons and Dragons previamente para comenzar?", p: "¡No es necesario! Nosotros te vamos a guiar desde el minuto uno para que puedas jugar sin problemas. ¡Lo único necesario son tus ganas de jugar!" },
        { h2: "¿Hay una historia principal? ¿O todas son historias individuales?", p: "Ambas, si bien existe una trama “principal” de la cual podés formar parte, los jugadores pueden ignorarla y seguir su propio camino. Sin embargo, en la historia principal se realizarán cambios en el mundo progresivamente, visibles para todos los jugadores. ¿Vas a tomar un bando?" },
        { h2: "pija", p: "poronga" }
    ]

  return (
    <main>
        <section className='static flex-col items-center justify-center h-full w-full bg-zinc-900'>
            <div className='flex flex-col items-center justify-center w-full h-full border-b-4 border-amber-400 bg-zinc-900'>
                <div className='w-full h-screen relative overflow-hidden bg-black flex items-center justify-center pt-20'>
                    <div ref={particlesRef} className="z-11 particles-container"></div>
                    <div className="absolute inset-0 animate-stars"></div>
                    <div className="absolute inset-0 animate-twinkle"></div>
                    <h1 className='text-4xl z-10 text-shadow-[0_0_5px_#FFFFFF] text-center select-none h1Nosotros fondo-h1-nosotros'>Nuevos Comienzos</h1>
                </div>
                <div className='paperwall w-full relative overflow-hidden flex items-center justify-center py-20 px-80'>
                    <HighlightUppercase 
                        tag="p"
                        text="En el año 2019, previo a la pandemia del coronavirus, un domingo cualquiera me junté con un grupo de amigos que me había invitado a jugar Dungeons and Dragons (DnD). Hasta ese entonces, yo no sabía prácticamente nada de los juegos de rol, nunca había jugado a uno, ni tampoco me llamaban demasiado la atención, pero mi primer acercamiento al DnD lo cambió todo. Luego de horas de preparación, entre que me explicaran las reglas y creara mi primer personaje, la partida dio inicio. El Dungeon Master (el narrador de la historia) describió la escena, el lugar, los personajes que allí se encontraban y nos hizo una simple pregunta: “Ahora, ¿Qué hace cada uno?”. Entre confundido y abrumado, no supe bien qué contestar, porque no sabía cuáles eran mis opciones. ¿Debería dirigirme hacia algún lugar en específico? ¿Debería comprar alguna poción o equipo? ¿Con quién tengo que hablar? ¿Qué tanto puedo hacer? La respuesta era más sencilla de lo que me imaginaba, “Pueden hacer lo que quieran” dijo el DM. En ese momento me explotó la cabeza, estaba inmerso en un mundo de fantasía prácticamente sin limitaciones, sin interfaz de usuario, sin opciones predefinidas, sin diálogos inalterables, sin botones de ataque o de salto. Fui completamente libre en un mundo de fantasía y podía hacer lo que me diera la gana. Sin embargo, siempre es bueno tener en cuenta de que nuestras acciones tienen consecuencias, tanto en esta realidad como en cualquier otra. Hoy intento que nuevos jugadores tengan su primer acercamiento a este mundo, que queden fascinados al igual que lo hice yo, y que sean libres al menos por un rato, en una realidad donde ellos mismos son los protagonistas."
                    />
                </div>
            </div>
        </section>
        <section className='flex flex-col items-center justify-center h-full w-full bg-[url(/backgrounds/fondo-madera-oscura.png)]'>
            <div className='py-20 px-80 my-10 border-2 border-amber-400 rounded-lg flex flex-col items-center justify-center w-3/4 h-full bg-zinc-900/50'>
                {info.map((inf, index) => (
                    <div key={index} className='py-10 my-10'> 
                        <h2 className='mb-20'>{inf.h2}</h2>
                        <p>{inf.p}</p>
                    </div>
                ))}
            </div>
        </section>
    </main>
  )
}
