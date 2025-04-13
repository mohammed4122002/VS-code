import { RootState } from "../app/store";
import { setClickedFile, setOpenedFile } from "../app/features/fileTreeSlice";

import { useState } from "react";
import { IFile } from "../interfaces";

import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  file: IFile;
}

const ReacursiveComponent = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const { openedFile } = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    if (!file.isFolder) {
      const exist = doesFileObjectExist(openedFile, file);
      dispatch(setClickedFile({filename:file.name , fileContent:file.content , activeTabId :file.id}))
      if (!exist) dispatch(setOpenedFile([...openedFile, file]));

   
    }
  };

  return (
    <div className="ml-2 mb-2 ">
      <div
        className="flex items-center mb-1 cursor-pointer hover:bg-gray-600/30 duration-75 "
        onClick={onFileClicked}
      >
        {file.isFolder ? (
          <div onClick={toggle} className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              filename={file.name}
              isFolder={file.isFolder}
              isOpen={isOpen}
            />

            <span className="ml-2">{file.name}</span>
          </div>
        ) : (
          <div className="flex items-center">
            <span >
              {/* <RenderFileIcon filename={file.name} /> */}
              <RenderFileIcon filename={file.name} />
            </span>
            <span className="ml-2">{file.name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        file.children &&
        file.children.map((el) => (
          <ReacursiveComponent key={el.id} file={el} />
        ))}
    </div>
  );
};
export default ReacursiveComponent;
