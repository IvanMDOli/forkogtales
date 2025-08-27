import { Link } from "react-router-dom";

export const GridNoticias = ( { noticias } ) => {
  return (
    <section className='pt-55 w-6/10 h-260 pb-20 grid grid-cols-3 gap-4'>
        {noticias.map((n, index) => {
        let extraClasses = "";

        if (index === 0) {
          extraClasses = "col-span-2 row-span-2";
        } else if (index === 3) {
          extraClasses = "col-span-2";
        }

        return (
            <div className={`relative h-full w-full overflow-hidden flex items-center justify-center bg-blue-600 border border-gray-400 transition duration-300 ease-in-out hover:border-amber-400 hover:bg-blue-500 self-center ${extraClasses}`}>
                <Link key={n.id} to={n.link} className="group block relative w-full h-full">
                    <div className="w-full h-full overflow-hidden flex items-center">
                        <img
                            src={n.imagen}
                            alt={n.titulo}
                            className="w-full object-cover"
                        />
                    </div>
                    <span className="absolute bottom-0 left-0 w-full h-full bg-zinc-900/50 px-2 py-1 transition-all duration-500 ease-in-out group-hover:h-14 group-hover:bg-zinc-950 overflow-hidden">
                        <h2 className="p-2 text-lg font-bold">{n.titulo}</h2>
                    </span>
                </Link>
            </div>
        );
      })}
    </section>
  )
}
