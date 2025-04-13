import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps {
  Content: string | undefined;
}

const FileSyntaxHighlighter = ({ Content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomDark}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflow: "auto",
      }}
      showLineNumbers
    >
      {Content || ""}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
