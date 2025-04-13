import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setClickedFile, setOpenedFile } from "../../app/features/fileTreeSlice";

interface DropMenuProps {
  setShowMenu: () => void;
  position: { x: number; y: number };
}

const ContexMenu = ({ position, setShowMenu }: DropMenuProps) => {
  const {openedFile , tabIdToRemove} = useSelector((state:RootState) => state.tree);
  const dispatch =useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCloseAll = () => {
      dispatch(setOpenedFile ([]));

  }
  const handleClose = () => {
    const filtered = openedFile.filter((file) => file.id !== tabIdToRemove);
    dispatch(setOpenedFile(filtered || []));
    const lastTab = filtered[filtered.length - 1];
    if (filtered.length - 1 >= 0) {
      dispatch(
        setClickedFile({
          activeTabId: lastTab.id,
          fileContent: lastTab.content,
          filename: lastTab.name,
        })
      );
    } else {
      dispatch(
        setClickedFile({ activeTabId: null, fileContent: "", filename: "" })
      );
    }
    
    setShowMenu();
    
    
  };
  return (
    <div ref={menuRef}>
      <ul
        className="bg-gray-50 text-gray-900 w-48 px-4 py-2 rounded-lg shadow-md border border-gray-300 absolute z-50"
        style={{ left: position.x, top: position.y }}
      >
        <li className="hover:bg-blue-100 px-3 py-2 cursor-pointer transition-colors duration-200 rounded" onClick={handleCloseAll}>Close all</li>
 
        <li className="hover:bg-blue-100 px-3 py-2 cursor-pointer transition-colors duration-200 rounded" onClick={handleClose}>Close</li>
      </ul>
    </div>
  );
};
export default ContexMenu;
