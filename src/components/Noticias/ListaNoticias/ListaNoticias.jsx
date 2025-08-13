import { Link } from "react-router-dom";

export const ListaNoticias = ({ noticias }) => {
  if (!noticias?.length) return null;

  return (
    <section className="w-full p-4 bg-zinc-700 flex flex-col items-center justify-center">
      {noticias.map((n) => (
        <div className="flex w-9/10 items-center justify-center p-2 border-b-1 border-amber-500/60 bg-linear-[to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_7%,rgba(0,0,0,0.7)_93%,rgba(0,0,0,0)_100%]">
          <Link
          key={n.id}
          to={n.link}
          className="flex w-3/5 items-center gap-4 hover:bg-gray-500 p-2 rounded-lg transition-colors"
          >
            <img
              src={n.imagen}
              alt={n.titulo}
              className="w-20 h-20 object-cover rounded-md"
            />
            <h3 className="text-lg font-medium">{n.titulo}</h3>
          </Link>
        </div>
      ))}
    </section>
  );
};
