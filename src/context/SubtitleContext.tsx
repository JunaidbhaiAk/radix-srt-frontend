
import { uploadFiles } from "@/lib/api";
import { SubTitleContextType, SubTitleType } from "@/lib/types";
import { createContext, useState } from "react";

export const SubtitleContext = createContext<SubTitleContextType | null>(null);

const SubtitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [subtitles,setSubtitles] = useState<SubTitleType[]>([]);
  const value = {
    subtitles,
    addSubtitle:(newSub:SubTitleType) => {
        setSubtitles((pre:any) => ([...pre,newSub]))
    },
    editSubtitle:(newSub:SubTitleType,idx:number) => {
        const preSubs = subtitles;
        preSubs[idx] = newSub;
        setSubtitles(preSubs);
    },
    uploadData:async(videoFile:File | null) => {
      const obj = {video: videoFile,subData: subtitles};
      const msg = await uploadFiles(obj);
      alert(msg);
      setSubtitles([]);
    }
  }
  return <SubtitleContext.Provider value={value}>{children}</SubtitleContext.Provider>;
};


export default SubtitleProvider;
