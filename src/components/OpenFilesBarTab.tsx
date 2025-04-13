import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { RootState } from "../app/store";
import { setClickedFile, setOpenedFile, setTabIdToRemove } from "../app/features/fileTreeSlice";


interface IProps {
  file: IFile;
}

const OpenFilesBarTab = ({ file }: IProps) => {
  
  const dispatch = useDispatch();

  const { activeTabId } = useSelector(
    (state: RootState) => state.tree.clickedFile
  );
  const { openedFile } = useSelector((state: RootState) => state.tree);

  const onClick = () => {
    dispatch(
      setClickedFile({
        filename: file.name,
        fileContent: file.content,
        activeTabId: file.id,
      })
    );
  };
  const onRemove = (id: string) => {
    const filtered = openedFile.filter((file) => file.id !== id);
    const lastTab = filtered[filtered.length - 1];
   
    dispatch(setOpenedFile(filtered || [] ));
     
  
    filtered.length - 1 >= 0
      ? dispatch(
          setClickedFile({
            activeTabId: lastTab.id,
            fileContent: lastTab.content,
            filename: lastTab.name,
          })
        )
      : dispatch(
          setClickedFile({ activeTabId: null, fileContent: "", filename: "" })
        );
  };
  return (
    <div
      className={`flex h-fit w-fit items-center gap-1 p-2 cursor-pointer border-t-2  ${
        file.id === activeTabId
          ? "border-t-fuchsia-600"
          : "border-t-transparent"
      }`}
      onClick={onClick}
      onContextMenu={() => {
        dispatch(setTabIdToRemove(file.id));
         }}

    >
      <RenderFileIcon filename={file.name} />
      <div className="pr-2">{file.name}</div>
      <div
        className="hover:bg-slate-600 duration-300 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
       
      >
        <CloseIcon />
      </div>
    
    </div>
  );
};
export default OpenFilesBarTab;
