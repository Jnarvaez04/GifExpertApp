import { useState, useEffect } from "react";
import { GifItem } from "../Components/GifItem";
import { getGifs } from "../Helpers/GetGifs";

export const useFetchGifs = ({ category }) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const Newimages = await getGifs( category );
        setImages(Newimages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();        
    }, [])
    


    return {
        images,
        isLoading
    }
}
