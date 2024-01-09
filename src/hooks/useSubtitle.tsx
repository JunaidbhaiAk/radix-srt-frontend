
import { SubtitleContext } from '@/context/SubtitleContext'
import { SubTitleContextType } from '@/lib/types';
import { useContext } from 'react'

const useSubtitle = () => {
  const {subtitles,addSubtitle,editSubtitle,uploadData} = useContext(SubtitleContext) as SubTitleContextType;
  return {subtitles,addSubtitle,editSubtitle,uploadData};
}

export default useSubtitle;