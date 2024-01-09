import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import "./App.css";
import UploadTab from "@/components/UploadTab";
import ViewTable from "@/components/ViewTable";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center w=[100%]">
      <Tabs defaultValue="upload" className="max-w-[600px] mt-2 w-[100%]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="view">View All</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <div className="flex min-h-screen flex-col items-center">
            <UploadTab />
          </div>
        </TabsContent>
        <TabsContent value="view">
          <ViewTable />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default App;
