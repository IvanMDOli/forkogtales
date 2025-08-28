import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from "react";

const puntos = [
  {
    id: 1,
    x: 1, // en porcentaje relativo al ancho de la imagen
    y: 1, // en porcentaje relativo al alto
    titulo: "Ciudad de Ejemplo",
    descripcion: "Esta es una ciudad importante en el mapa."
  },
  {
    id: 2,
    x: 5,
    y: 5,
    titulo: "Pueblo Oculto",
    descripcion: "Aquí hay un pequeño asentamiento."
  },
  {
    id: 3,
    x: 10,
    y: 10,
    titulo: "Pueblo Oculto",
    descripcion: "Aquí hay un pequeño asentamiento."
  },
  {
    id: 4,
    x: 15,
    y: 15,
    titulo: "Pueblo Oculto",
    descripcion: "Aquí hay un pequeño asentamiento."
  },
  {
    id: 5,
    x: 50,
    y: 50,
    titulo: "Pueblo Oculto",
    descripcion: "Aquí hay un pequeño asentamiento."
  }
];

export const Mapa = () => {
  const [puntoActivo, setPuntoActivo] = useState(null);

  return (
    <div className="flex flex-col items-center pt-48 pb-10 mapa-background">
      <div className="w-3/4 h-full border border-amber-400 rounded-md overflow-hidden relative cursor-grab active:cursor-grabbing bg-zinc-900">
        <TransformWrapper>
          <TransformComponent>
            <div className="relative w-full h-full">
              <img
                src="/map/mapa-principal.png"
                alt="Mapa"
                className="select-none pointer-events-none transition-transform duration-150 w-full h-auto"
              />
              {puntos.map((p) => (
                <div
                  key={p.id}
                  className="absolute w-2 h-2 bg-amber-200 rotate-45 border-3 border-black cursor-pointer hover:border-amber-400 duration-300"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                  onClick={() => setPuntoActivo(p)}
                />
              ))}
              {puntoActivo && (
                <div
                  className="absolute bg-white text-black p-4 rounded-lg shadow-md max-w-xs"
                  style={{
                    left: `${puntoActivo.x}%`,
                    top: `${puntoActivo.y}%`,
                    transform: "translate(-50%, -120%)"
                  }}
                >
                  <h3 className="font-bold text-lg">{puntoActivo.titulo}</h3>
                  <p className="text-sm">{puntoActivo.descripcion}</p>
                  <button
                    onClick={() => setPuntoActivo(null)}
                    className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md text-xs"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};
