'use client'
import { libraryContainer } from "./styles";
import { useEffect, useState } from "react";
import useApi from "@/lib/hooks/useApi";
import { TMovie } from "@/lib/types/TMovie";
import MovieTile from "@/lib/MovieTile";
import PageHeader, { HeaderOptions } from "@/lib/components/PageHeader";
import { IconFolderFilled, IconLayoutGrid, IconWorld } from "@tabler/icons-react";


export default function Library() {
    const [elements, setElements] = useState<TMovie[]>([]);
    const [activeOption, setActiveOption] = useState<string>('Your Files');
    const api = useApi();

    const options: HeaderOptions[] = [
        {
            icon: IconFolderFilled,
            label: 'Your Files',
            onClick: () => { setActiveOption('Your Files') }
        },
        {
            icon: IconWorld,
            label: 'Shared with you',
            onClick: () => { setActiveOption('Shared with you') }
        }
    ]
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
            <PageHeader title="Library" icon={IconLayoutGrid} options={options} activeOption={activeOption} />
            {/* TODO:change this to pandaCSS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {elements.length > 0 && elements?.map((element, index) => (
                    <MovieTile key={index} episode={{ movie_name: element.name, cover_url: element?.horizontal_cover_url, tmdb_movie_id: element.tmdb_id }} />
                ))}
            </div>
        </div>
    )
}