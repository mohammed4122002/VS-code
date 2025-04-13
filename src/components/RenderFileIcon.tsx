import { extensionIconPaths } from "../constant";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder = false, isOpen }: IProps) => {
  const extension: string | undefined = filename.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;
    return <IconImg src={iconPath} />;
  }

  if (isFolder) {
    return isOpen ? (
      <IconImg src="/icons/folder-default-open.svg" />
    ) : (
      <IconImg src="/icons/folder-default.svg" />
    );
  }

  return <FileIcon />;
};
export default RenderFileIcon;

/*
  if (extension === "tsx") return <IconImg src="/icons/react_ts.svg" />;
  if (extension === "jsx") return <IconImg src="/icons/react.svg" />;
  if (extension === "js") return <IconImg src="/icons/javascript.svg" />;
  if (extension === "html") return <IconImg src="/icons/html.svg" />;

  if (extension === "node_modules")
    return isOpen && isFolder ? (
      <IconImg src="/icons/folder-node-open.svg" />
    ) : (
      <IconImg src="/icons/folder-node.svg" />
    );
  if (extension === "public")
    return isOpen && isFolder ? (
      <IconImg src="/icons/folder-public-open.svg" />
    ) : (
      <IconImg src="/icons/folder-public.svg" />
    );
  if (extension === "src")
    return isOpen && isFolder ? (
      <IconImg src="/icons/folder-src-open.svg" />
    ) : (
      <IconImg src="/icons/folder-src.svg" />
    );
  if (extension === "components")
    return isOpen && isFolder ? (
      <IconImg src="/icons/folder-components-open.svg" />
    ) : (
      <IconImg src="/icons/folder-components.svg" />
    );
*/
