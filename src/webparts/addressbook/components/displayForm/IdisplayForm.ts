import { IpersonDetails } from "../../model/model";
export interface IDisplayFormProps {
    toggleForm: (isVisible: boolean) => void;
    setMode: (mode: string) => void;
    selectedMode: string;
    selectedContact: IpersonDetails;
    contactList:IpersonDetails[];
}