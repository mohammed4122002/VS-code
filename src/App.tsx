

import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import ReacursiveComponent from "./components/ReacursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";





const App = () => {
   const { openedFile } = useSelector((state: RootState) => state.tree);
 
  return (
    <div className="flex h-screen">
      
      <ResizablePanel leftPanel={<div className="w-[400px] p-2 " >
        <ReacursiveComponent file={fileTree} />
      
        </div>
      }
      rightPanel={openedFile.length ?<Preview/> : <WelcomeTab/>}
      showLeftPanel={true}
      />
        
    </div>
  );
};

export default App;
