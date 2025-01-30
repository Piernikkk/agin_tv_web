import { IconUpload } from "@tabler/icons-react";
import ModalBase from "..";
import Input from "../../Input";
import Dropzone from "../../Dropzone";
import { UploadFileContainer, UploadFileInputs } from "./styles";
import Button from "../../Button";

export interface UploadFileModalProps {
    opened: boolean,
    onClose: () => void,
}

export default function UploadFileModal({ ...props }: UploadFileModalProps) {
    const handleDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles);
    };

    return (
        <ModalBase title="Upload File" icon={IconUpload} {...props}>
            <div className={UploadFileContainer}>
                <div className={UploadFileInputs}>
                    <Input width={'100%'} label="Movie ID" />
                    <Input width={'100%'} label="Episode" />

                </div>
                <Dropzone onDrop={handleDrop} />
                <Button label="Upload" icon={IconUpload} />
            </div>
        </ModalBase>
    )
}