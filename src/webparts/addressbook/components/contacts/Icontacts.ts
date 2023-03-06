import { IpersonDetails } from "../../model/model";
export interface IContactState{
    // toggleContactDetails:(isVisible:boolean)=>void;
    contactList:IpersonDetails[];
    selectContact:(contact:IpersonDetails)=>void;
    toggleContactDetails:(isVisible:boolean)=>void;
    toggleForm:(isVisible:boolean)=>void;
    setContactList:(contactList:IpersonDetails[])=>void;
  }