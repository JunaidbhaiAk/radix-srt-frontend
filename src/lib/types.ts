import { Dispatch, SetStateAction } from "react";

export type FileType = {
    id:string;
    videoFile:string;
    vttFile:string;
    createdAt:string;
}

export type SubTitleType = {
    start:string;
    end:string;
    text:string;
}

export type DataContextType = {
    allFiles:FileType[];
    selectedFile:string | null;
    selectedId:string | number;
    setAllFliles:Dispatch<SetStateAction<FileType[]>>;
    sub:SubTitleType[] | null;
    fetchFile: (fileId:string) => void;
}

export type SubTitleContextType = {
    subtitles:SubTitleType[];
    addSubtitle:(newSub:SubTitleType) => void;
    editSubtitle:(newSub:SubTitleType,idx:number) => void;
    uploadData: (videoFile:File | null) => void;
}