import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { dropzoneStyles, filePreviewContainer } from './styles';
import Text from '../Text';
import { IconTrash } from '@tabler/icons-react';
import { token } from '@/styled-system/tokens';

interface DropzoneProps {
    onDrop: (acceptedFiles: File[]) => void;
}

export default function Dropzone({ onDrop }: DropzoneProps) {
    const [currentFile, setCurrentFile] = React.useState<File | null>(null);

    const onDropCallback = useCallback((acceptedFiles: File[]) => {
        setCurrentFile(acceptedFiles[0]);
        onDrop(acceptedFiles);
    }, [onDrop]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: onDropCallback,
        maxFiles: 1
    });

    return (
        <div {...getRootProps()} className={dropzoneStyles}>
            <input {...getInputProps()} />
            <p>Drag & drop a file here, or click to select a file</p>
            {currentFile && <div className={filePreviewContainer}>
                <IconTrash color={token('colors.red.7')} onClick={(e) => { e?.stopPropagation(); onDropCallback([]); }} />
                <Text>{currentFile?.name}</Text>
            </div>}
        </div>
    );
};

