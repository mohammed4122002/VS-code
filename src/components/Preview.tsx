import OpenFilesBar from "./OpenFilesBar";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Preview = () => {
  const { fileContent } = useSelector(
    (state: RootState) => state.tree.clickedFile
  );
  return (
    <>
      <OpenFilesBar />
      <div className="border-t border-gray-700 ">
        
        <FileSyntaxHighlighter Content={fileContent} />
      </div>
    </>
  );
};
export default Preview;
