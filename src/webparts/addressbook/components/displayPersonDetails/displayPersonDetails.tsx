import displayStyles from "./displayPersonDetails.module.scss";
import { IDetailsProps } from './IdisplayPersonDetails';
import React from 'react';

const DisplayPersonDetails = (props:IDetailsProps): JSX.Element => {

    const deleteContact=()=>{
    console.log("del");
    props.setContactList(props.contactList.filter((contact)=>contact.id!==props.selectedContact.id));
    props.toggleContactDetails(false);
    }
    return (
        <div className={displayStyles.details} id="details">
            <div className={displayStyles.topSection}>
                <div className={displayStyles.nameSection}>{props.selectedContact.name}</div>
                <div className={displayStyles.edit}>
                    <img src={require('../../assets/edit1.jpg')} id="editImg" className={displayStyles.editImg} onClick={()=>{props.setMode("edit");props.toggleForm(true);props.toggleContactDetails(false)}}/>
                  <p id="editText">EDIT</p>
                  </div>
                <div className={displayStyles.delete} id="dlt">
                  <img src={require('../../assets/delete1.png')} className={displayStyles.dltImg} onClick={deleteContact} id="dltImg"/>
                  <p id="dltText" className={displayStyles.dltText} >DELETE</p>
                </div>
            </div>
            <div className={displayStyles.mailSection}>
                <p>Email: {props.selectedContact.mail}</p>
                    <p id="mailError"></p>
            </div>
            <div className={displayStyles.mobileSection}>
                <p>Mobile: {props.selectedContact.mobile}</p>
                <p id="phnoError"></p>
                <p>Landline: {props.selectedContact.landline}</p>
                <p id="phnoError"></p>
            </div>
            <div className={displayStyles.websiteSection}>
            <p>Website: {props.selectedContact.website}</p>
            </div>
            <div className={displayStyles.addressSection}>
            <p>Address: {props.selectedContact.address}</p>
            </div>
        </div>
    )
}
export default DisplayPersonDetails