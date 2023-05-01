import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
    <>
        <h3>{ category }</h3>
        {
            isLoading 
            ? (<h3>Cargando...</h3>)
            : null
        }
        {
            <div className="card-grid">
                {
                    images.map((item) => (
                        <GifItem 
                            key={item.id} 
                            {...item}
                        />
                    ))
                }
            </div>
        }
    </>
  )
}
