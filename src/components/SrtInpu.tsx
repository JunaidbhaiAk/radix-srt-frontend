'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { verifyTime } from "@/lib/utils";
import useSubtitle from "@/hooks/useSubtitle";

type Props = {
    start:string;
    end:string;
    subtext:string;
    idx:number;
}

const SrtInpu = (props:Props) => {
  const {start,end,subtext,idx} = props;
  const check = start.length > 0;
  const {addSubtitle,editSubtitle} = useSubtitle();
  const [currSub,setcurrSub] = useState({start,end,subtext})
  const handleChange = (e:any) => {
    setcurrSub((pre) => ({...pre,[e.target.name]:e.target.value}));
  }
  const handleSubmit = () => {
    const vals = [currSub.start,currSub.end];
    if(!vals.every(verifyTime) || currSub.subtext === ""){
        alert('Please Check the format And Do not Leav Empty Fields');
    }else{
        if(!check){
           addSubtitle(currSub)
           setcurrSub({start:"",end:"",subtext:""});
        }else{
            editSubtitle(currSub,idx);
        }
        alert("Added Successfully")
    }
  }
  
  return (
    <div className="flex w-full max-w-lg items-center space-x-2 mb-2">
      <Input onChange={handleChange} type="text" placeholder="Start Time" name="start" value={currSub.start}/>
      <Input onChange={handleChange} type="text" placeholder="End Time" name="end" value={currSub.end}/>
      <Input onChange={handleChange} type="text" placeholder="Enter Text" name="subtext" className="w-[200px]" value={currSub.subtext}/>
      <Button type="submit" onClick={handleSubmit}>{!check ? 'ADD' : 'EDIT'}</Button>
    </div>
  );
};

export default SrtInpu;
