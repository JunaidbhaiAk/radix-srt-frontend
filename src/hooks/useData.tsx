'use client'
import { DataContext } from '@/context/DataContext'
import { getAllFiles } from '@/lib/api';
import { DataContextType } from '@/lib/types';
import { useContext, useEffect } from 'react'

const useData = () => {
  const {allFiles,setAllFliles,fetchFile,selectedId,selectedFile,sub} = useContext(DataContext) as DataContextType;
  useEffect(() => {
    getAllFiles().then((data) => {
      setAllFliles(data?.files)
    });
  },[])
  return {allFiles,fetchFile,selectedId,selectedFile,sub};
}

export default useData