import {  useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenFilesBarTab from "./OpenFilesBarTab";
import { useState } from "react";
import ContexMenu from "./ui/ContexMenu";

const OpenFilesBar = () => {
  const { openedFile } = useSelector((state: RootState) => state.tree);
  const [showMenu , setShowMenu] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  
  return (
    <div>
    <div className="flex justify-start"    onContextMenu={(e) => {
        e.preventDefault();
     
       setMenuPosition({ x: e.clientX, y: e.clientY });
       setShowMenu(true)
       
       
      }} >
      {openedFile.map((file) => (
        <OpenFilesBarTab key={file.id} file={file}/>
      ))}
    </div>
    {showMenu && (<ContexMenu position={menuPosition} setShowMenu={()=>{setShowMenu(false)}}/>)}
     
    </div>
  );
};
export default OpenFilesBar;
