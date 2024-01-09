import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import useData from "@/hooks/useData";
import { removeTimestamps, sanatizeDate } from "@/lib/utils";
import VideoWithSub from "./VideoWithSub";
import { FileType } from "@/lib/types";

const ViewTable = () => {
  const { allFiles, fetchFile, selectedFile, sub } = useData();
  console.log(sub);
  return (
    <Dialog>
      <DialogHeader>
        <DialogContent className="max-w-[750px]">
          {selectedFile && sub && (
            <VideoWithSub subtitles={sub} videoURL={selectedFile} />
          )}
        </DialogContent>
      </DialogHeader>
      <Table>
        <TableCaption>A list of recent Uploads By Radix Srt.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Video Name</TableHead>
            <TableHead>Subtitle Name</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allFiles?.map((ele: FileType) => {
            const { id, videoFile, vttFile, createdAt } = ele;
            return (
              <TableRow key={id}>
                <TableCell className="font-medium">{`#${id}`}</TableCell>
                <TableCell>{removeTimestamps(videoFile)}</TableCell>
                <TableCell>{removeTimestamps(vttFile)}</TableCell>
                <TableCell>{sanatizeDate(createdAt)}</TableCell>
                <TableCell onClick={() => fetchFile(id)}>
                  <DialogTrigger>View</DialogTrigger>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Dialog>
  );
};

export default ViewTable;
