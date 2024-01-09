
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent,useState } from "react";
import SrtInpu from "@/components/SrtInpu";
import useSubtitle from "@/hooks/useSubtitle";
import VideoWithSub from "./VideoWithSub";
const UploadTab = () => {
  const { subtitles, uploadData } = useSubtitle();
  const [videoURL, setVideoURL] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target?.files?.[0];
    if (selectedFile) {
      setVideoFile(selectedFile);
      const fileUrl = URL.createObjectURL(selectedFile);
      setVideoURL(fileUrl);
    }
  };
  
  const handleUpload = () => {
    uploadData(videoFile);
    setVideoFile(null);
    setVideoURL("");
  };
  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5 p-2">
        <Label htmlFor="picture">Select Video</Label>
        <Input id="picture" type="file" onChange={handleChange} />
      </div>
      <VideoWithSub videoURL={videoURL} subtitles={subtitles} />
      <div className="mt-2">
        <span className="text-sm font-bold block my-2">HH:MM:SS Format Only Supported</span>
        {subtitles?.map((ele: any, idx: number) => (
          <SrtInpu
            start={ele.start}
            end={ele.end}
            subtext={ele.subtext}
            idx={idx}
            key={idx}
          />
        ))}
        <SrtInpu start="" end="" subtext="" idx={0} />
      </div>
      <Button className="m-2 w-full" onClick={handleUpload}>
        Upload
      </Button>
    </>
  );
};

export default UploadTab;
