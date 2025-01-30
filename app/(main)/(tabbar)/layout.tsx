'use client'
import UploadFileModal from "@/lib/components/Modal/UploadFile";
import useDisclosure from "@/lib/hooks/useDisclosure";
import TabBar from "@/lib/TabBar";
import { createContext, ReactNode } from "react";

export const UploadFileModalContext = createContext({
    uploadFileOpened: false,
    uploadFile: { open: () => { }, close: () => { } }
});

export default function TabLayout({ children }: { children: ReactNode }) {

    const [uploadFileOpened, uploadFile] = useDisclosure(false)

    return (
        <UploadFileModalContext.Provider value={{ uploadFileOpened, uploadFile }}>
            <UploadFileModal opened={uploadFileOpened} onClose={uploadFile.close} />
            <TabBar>
                {children}
            </TabBar>
        </UploadFileModalContext.Provider >
    )

}