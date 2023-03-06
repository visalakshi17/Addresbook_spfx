import { IpersonDetails } from "../model/model";

export interface IAddressbookProps {
  // description: string;
  // isDarkTheme: boolean;
  // environmentMessage: string;
  // hasTeamsContext: boolean;
  // userDisplayName: string;
  show:boolean;
  contactList:IpersonDetails[];
  selectedContact:IpersonDetails;
  displayContactDetails:boolean;
  selectedMode:string;
}
