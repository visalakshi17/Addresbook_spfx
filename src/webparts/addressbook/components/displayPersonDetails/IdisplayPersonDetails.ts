import { IpersonDetails } from "../../model/model";
export interface IDetailsProps{
    toggleContactDetails:(isVisible:boolean)=>void;
    selectedContact:IpersonDetails;
    selectedMode:string;
    setMode:(mode:string)=>void;
    toggleForm:(isVisible:boolean)=>void;
    contactList:IpersonDetails[];
    setContactList:(contactList:IpersonDetails[])=>void;
}