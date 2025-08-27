import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const Mapa = () => {
  

  return (
    <div className="flex flex-col items-center pt-48 pb-10 mapa-background">
      <div className="w-3/4 h-full border border-amber-400 rounded-md overflow-hidden relative cursor-grab active:cursor-grabbing bg-zinc-900">
        <TransformWrapper>
          <TransformComponent>
            <img
              src="/map/mapa-principal.png"
              alt="Mapa"
              className="select-none pointer-events-none transition-transform duration-150"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};
