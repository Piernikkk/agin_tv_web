import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { dropzoneStyles } from './styles';

interface DropzoneProps {
    onDrop: (acceptedFiles: File[]) => void;
}

export default function Dropzone({ onDrop }: DropzoneProps) {
    const onDropCallback = useCallback((acceptedFiles: File[]) => {
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
        </div>
    );
};

