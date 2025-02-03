'use client';
import { noInputContainer, searchPageContainer } from "./styles";
import Input from "@/lib/components/Input";
import Text from "@/lib/components/Text";
import useApi from "@/lib/hooks/useApi";
import { TMovie } from "@/lib/types/TMovie";
import { IconSearch } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { libraryElementsContainer } from "../library/styles";
import LibraryMovieTile from "@/lib/MovieTile/Library";
import { useRouter } from "next/navigation";

export default function Page() {
    const api = useApi();
    const [search, setSearch] = useState('');
    const abortController = useRef<AbortController>(null);
    const [data, setData] = useState<TMovie[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    function getAsyncData(searchQuery: string, signal: AbortSignal): Promise<TMovie[]> {
        return new Promise(async (resolve, reject) => {
            if (!api || searchQuery == '' || !searchQuery) {
                resolve([]);
                return;
            }
            signal.addEventListener('abort', () => {
                reject(new Error('Request aborted'));
            });

            const res = await api.get<TMovie[]>('/search', { params: { query: searchQuery } });
            resolve(res.data.filter((f) => f.name));
        });
    }

    const fetchOptions = (query: string) => {
        abortController.current?.abort();
        abortController.current = new AbortController();
        setSearch(query);
        setLoading(true);

        getAsyncData(query, abortController.current.signal)
            .then((result) => {
                setData(result);
                abortController.current = null;
                setLoading(false);
            })
            .catch(() => { });
    };


    return (
        <div className={searchPageContainer}>
            <Input width={'100%'} onChange={(e) => fetchOptions(e.target.value)} large icon={IconSearch} />
            {search == '' ? <div className={noInputContainer}>
                <Text size="xl">Type something you want to find...</Text>
            </div> : !loading ? data.length > 0 ?
                <div className={libraryElementsContainer}>
                    {data?.map((d, i) => (
                        <LibraryMovieTile key={d.tmdb_id + i} {...d} onPlusClick={(e) => {
                            e.stopPropagation();
                            api?.patch('/collections/system/library', { movie_id: d.tmdb_id });
                            router.push('/app/library');
                        }} />
                    ))}
                </div> : <div className={noInputContainer}>
                    <Text size="xl">No results found</Text>
                </div> : <div className={noInputContainer}>
                <Text size="xl">Loading...</Text>
            </div>}
        </div>
    )
}