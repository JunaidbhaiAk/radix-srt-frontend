import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoWithSub = (props: any) => {
  const { videoURL,subtitles } = props;
  
  const [activeSubtitle, setActiveSubtitle] = useState("");
  const [currTime, setCurrTime] = useState(0);
  const [videoStarted, setvideoStarted] = useState(false);
  useEffect(() => {
    const checkActiveSubtitle = () => {
      if (subtitles.length > 0 && subtitles.length) {
        const index = subtitles?.findIndex(
          (subtitle: any) =>
            currTime >= parseTime(subtitle.start) &&
            currTime <= parseTime(subtitle.end)
        );
        if (index >= 0) setActiveSubtitle(subtitles[index].subtext);
        else setActiveSubtitle("");
      }
    };

    const parseTime = (timeString: string) => {
      const [hh, mm, ss] = timeString.split(":").map(Number);
      return hh * 3600 + mm * 60 + ss;
    };
    checkActiveSubtitle();
  }, [currTime, subtitles]);
  const handleProgress = (ele: any) => {
    setCurrTime(Math.floor(ele.playedSeconds));
  };
  return (
    <div>
      {videoURL && (
        <div className="video-container p-2">
          <ReactPlayer
            url={videoURL}
            controls
            onProgress={handleProgress}
            onStart={() => setvideoStarted(true)}
          />
        </div>
      )}
      {videoStarted && <div className="w-[100%] bg-black p-2 text-white text-center rounded tracking-wider shadow-lg">
       <h1 className="font-bold text-lg">{activeSubtitle}</h1>
      </div>}
    </div>
  );
};

export default VideoWithSub;
