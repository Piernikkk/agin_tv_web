import { IconUpload } from "@tabler/icons-react";
import ModalBase from "..";
import Input from "../../Input";
import Dropzone from "../../Dropzone";
import { UploadFileContainer, UploadFileInputs } from "./styles";
import Button from "../../Button";
import useApi from "@/lib/hooks/useApi";
import { useState, useRef } from "react";
import ProgressBar from "../../ProgressBar";

export interface UploadFileModalProps {
    opened: boolean,
    onClose: () => void,
}

export default function UploadFileModal({ ...props }: UploadFileModalProps) {
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState<number>(0); // State for progress
    const api = useApi();
    const [movieID, setMovieID] = useState<string | null>();
    const [episode, setEpisode] = useState<string | null>();
    const [uploading, setUploading] = useState<boolean>(false);
    const abortControllerRef = useRef<AbortController | null>(null);

    const handleUpload = async () => {
        if (!api || !file || !movieID || (!episode && !movieID.startsWith('m'))) {
            console.log("No api, file or movieID");
            return;
        }

        setUploading(true);
        abortControllerRef.current = new AbortController();


        let seasonNumber = '0';
        let episodeNumber = '0';

        if (!movieID.startsWith('m') && episode) {
            const tmp = episode.split(',');
            seasonNumber = tmp[0];
            episodeNumber = tmp[1];
        }

        console.log("movieData: ", movieID, episodeNumber, seasonNumber);

        const formData = new FormData();
        formData.append('movie_id', movieID);
        formData.append('season', seasonNumber);
        formData.append('episode', episodeNumber);
        formData.append('file', file);

        try {
            await api.post('/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                signal: abortControllerRef.current.signal,
                onUploadProgress: (progressEvent) => {
                    if (!progressEvent.total) {
                        return;
                    }
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress(percentCompleted); // Update progress
                }
            });
        } catch (error) {
            if (error instanceof Error && error.name === 'CanceledError') {
                console.log('Upload cancelled');
            } else {
                console.log("Upload failed", error);
            }
        } finally {
            setUploading(false);
        }
    }

    const handleDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        setFile(acceptedFiles[0]);
    };

    const handleCancel = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        setUploading(false);
    };

    return (
        <ModalBase title="Upload File" icon={IconUpload} {...props}>
            <div className={UploadFileContainer}>
                <div className={UploadFileInputs}>
                    <Input onChange={(e) => setMovieID(e?.currentTarget?.value)} width={'100%'} label="Movie ID" placeholder="e.g. t123" />
                    {!movieID?.startsWith('m') && <Input onChange={(e) => setEpisode(e?.currentTarget?.value)} width={'100%'} label="Episode" placeholder="e.g. 1,1" />}
                </div>
                <Dropzone onDrop={handleDrop} />
                {uploading && <ProgressBar progress={progress} />}
                {uploading ? <Button onClick={handleCancel} label="Cancel" /> :
                    <Button onClick={handleUpload} label="Upload" icon={IconUpload} />
                }
            </div>
        </ModalBase>
    )
}