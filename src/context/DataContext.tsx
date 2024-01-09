
import { getFileStream, getSubtitle } from "@/lib/api";
import { DataContextType, FileType, SubTitleType } from "@/lib/types";
import { createContext, useState } from "react";

export const DataContext = createContext<DataContextType | null>(null);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [allFiles,setAllFliles] = useState<FileType[]>([]);
  const [selectedId,setSelectedId] = useState<string | number>(-1);
  const [selectedFile,setSelectedFile] = useState<string | null>(null);
  const [sub,setSub] = useState<SubTitleType[] | null>(null);
  const value = {
    allFiles,
    selectedFile,
    selectedId,
    setAllFliles,
    sub,
    fetchFile: async (fileId:string) => {
      setSelectedId(Number(fileId));
      const videoFile = await getFileStream(fileId,0);
      setSelectedFile(URL.createObjectURL(videoFile));
      const subFile:any = await getSubtitle(fileId);
      setSub(subFile);
    }
  }
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};


export default DataProvider;
