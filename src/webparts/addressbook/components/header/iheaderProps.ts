import { IpersonDetails } from "../../model/model";
export interface IHeaderProps{
    toggleForm:(show:boolean)=>void;
    setMode: (mode: string) => void;
    selectContact:(contact:IpersonDetails)=>void;
}