import IconImg from "./IconImg";

const WelcomeTab = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full gap-4">
            <h1 className="text-2xl font-bold text-gray-600">Welcome to Code Editor</h1>
       <IconImg src="/icons/vscode.svg" className={"w-64 h-64"} />
       </div>
    );
    }
    export default WelcomeTab;