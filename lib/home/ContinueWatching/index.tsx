import Text from "@/lib/components/Text";
import MovieTile from "@/lib/MovieTile";
import { continueWatchingContainer } from "./styles";

export default function ContinueWatching() {
    return (
        <div className={continueWatchingContainer}>
            <Text size="lg" weight={600}>Continue Watching</Text>
            <div>
                <MovieTile />
                <MovieTile />
                <MovieTile />
            </div>
        </div>
    );
}