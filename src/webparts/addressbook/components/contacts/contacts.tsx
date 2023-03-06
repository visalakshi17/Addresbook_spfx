import { IContactState } from "./Icontacts";
import contactStyles from "./Contacts.module.scss"
import React from "react";

const Contacts=(props:IContactState): JSX.Element=> {
    console.log(props.contactList);
    //const navigate=useNavigate();
    const contacts = props.contactList.map(contact =>
      // <div className={contactStyles.person} key={contact.id} onClick={(key)=>props.toggleContactDetails(true)}></div>
      // <Link to={'/contact/${contact.name}'}> 
      <div className={contactStyles.person} key={contact.id} onClick={()=>{props.selectContact(contact);props.toggleForm(false);props.toggleContactDetails(true)}}>
        <div className={contactStyles.name}>{contact.name}</div>
        <div className={contactStyles.mail}>{contact.mail}</div>
        <div className={contactStyles.phNo}>{contact.mobile}</div>
      </div>
    );
    return (<div className={contactStyles.contactSection}>{contacts}</div>);
  }
export default Contacts