'use client'
import Text from "@/lib/components/Text";
import { libraryContainer } from "./styles";
import { useEffect, useState } from "react";
import useApi from "@/lib/hooks/useApi";
import { TMovie } from "@/lib/types/TMovie";
import MovieTile from "@/lib/MovieTile";

export default function Library() {
    const [elements, setElements] = useState<TMovie[]>([]);
    const api = useApi();

    useEffect(() => {
        (async () => {
            if (!api) {
                return;
            }

            const libraryData = await api.get(`/collections/system/library`);
            setElements(libraryData?.data);
        })();
    }, [api]);


    return (
        <div className={libraryContainer}>
            <Text weight={600} size="xl">Library</Text>
            {/* TODO:change this to pandaCSS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {elements.map((element, index) => (
                    <MovieTile key={index} episode={{ movie_name: element.name, cover_url: element?.horizontal_cover_url, tmdb_movie_id: element.tmdb_id }} />
                ))}
            </div>
        </div>
    )
}