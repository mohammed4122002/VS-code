import { IFile } from "../interfaces";

export const doesFileObjectExist = (arr:IFile[] , file:IFile)=>{
    return arr.some(obj =>obj.id===file.id)
}