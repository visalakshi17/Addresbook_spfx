import * as React from "react"
import formStyles from './displayForm.module.scss'
//import { PrimaryButton } from "office-ui-fabric-react"
import { useState } from "react"
import { IDisplayFormProps } from "./IdisplayForm"
import { v4 as uuidv4 } from 'uuid';
import { Validate } from "./validations";
import { addContact } from "../../services/services";

const DisplayForm = (props: IDisplayFormProps): JSX.Element => {
    const [details, setDetails] = useState({
        id: uuidv4(),
        name: ((props.selectedMode === "edit") ? (props.selectedContact.name) : ""),
        mail: ((props.selectedMode === "edit") ? (props.selectedContact.mail) : ""),
        mobile: ((props.selectedMode === "edit") ? (props.selectedContact.mobile) : ""),
        landline: ((props.selectedMode === "edit") ? (props.selectedContact.landline) : ""),
        website: ((props.selectedMode === "edit") ? (props.selectedContact.website) : ""),
        address: ((props.selectedMode === "edit") ? (props.selectedContact.address) : "")
    });

    const [error, setError] = useState(
        {
            nameError: "",
            mailError: "",
            mobileError: "",
            landlineError: "",
            websiteError: "",
            addressError: ""
        })
    const [contactData, setContactData] = useState({
        nameValue: details.name,
        mailValue: details.mail,
        mobileValue: details.mobile,
        landlineValue: details.landline,
        websiteValue: details.website,
        addressValue: details.address
    })
    const submitForm = (e: any) => {
        e.preventDefault()
        if (details.name === "" || details.mail === "" || details.mobile === "" || details.landline === "" || details.website === "" || details.address === "") {
            alert("Please Enter all the Details")
            return (false)

        }
        else {
            if (error.nameError!==""||error.mailError!==""||error.mobileError!==""||error.landlineError!==""||error.websiteError!==""||error.addressError!==""){
                alert("Please Enter valid Details");
                return (false)
            }
            props.toggleForm(false);
            addContact(props.contactList, details);
        }   // getContact(details)
    }
    const handlerInputChange = (e: any) => {
        let id = e.target.id;
        console.log(id);
        switch (id) {
            case "name":
                const namevaluee = e.target.value;
                setContactData({ ...contactData, nameValue: namevaluee });
                setError({ ...error, nameError: Validate("name", namevaluee) });
                console.log(error);
                setDetails({ ...details, name: namevaluee });
                break;
            case "mail":
                console.log("entering switch");
                const mailvaluee = e.target.value;
                console.log(mailvaluee);
                setContactData({ ...contactData, mailValue: mailvaluee });
                setError({ ...error, mailError: Validate("email", mailvaluee) });
                setDetails({ ...details, mail: mailvaluee });
                break;
            case "mobile":
                const mobilevaluee = e.target.value;
                setContactData({ ...contactData, mobileValue: mobilevaluee });
                setError({ ...error, mobileError: Validate("mobile", mobilevaluee) });
                setDetails({ ...details, mobile: mobilevaluee });
                break;
            case "landline":
                const landlinevaluee = e.target.value;
                setContactData({ ...contactData, landlineValue: landlinevaluee });
                setError({ ...error, landlineError: Validate("landline", landlinevaluee) });
                setDetails({ ...details, landline: landlinevaluee });
                break;
            case "website":
                const websitevaluee = e.target.value;
                setContactData({ ...contactData, websiteValue: websitevaluee });
                setError({ ...error, websiteError: Validate("website", websitevaluee) });
                setDetails({ ...details, website: websitevaluee });
                break;
            case "address":
                const addressvaluee = e.target.value;
                setContactData({ ...contactData, addressValue: addressvaluee });
                setError({ ...error, addressError: Validate("address", addressvaluee) });
                setDetails({ ...details, address: addressvaluee });
                break;
        }
    }
    const updateForm=(e: any)=>{
        e.preventDefault();
        if (details.name === "" || details.mail === "" || details.mobile === "" || details.landline === "" || details.website === "" || details.address === "") {
            alert("Please Enter all the Details")
            return (false)

        }
        else {
            if (error.nameError!==""||error.mailError!==""||error.mobileError!==""||error.landlineError!==""||error.websiteError!==""||error.addressError!==""){
                alert("Please Enter valid Details");
                return (false)
            }
        props.toggleForm(false);
        props.selectedContact.name=details.name;
        props.selectedContact.mail=details.mail;
        props.selectedContact.mobile=details.mobile;
        props.selectedContact.landline=details.landline;
        props.selectedContact.website=details.website;
        props.selectedContact.address=details.address;
    }}
    return (
        <div className={formStyles.displaySection}>
            <form action="" id="form" className={formStyles.formDiv}>
                <div className={formStyles.section}>
                    <div className="label" id='section1'>
                        <label>Name</label>
                    </div>
                    <div className="textBox">
                        <input type="text" id="name" name='name' value={contactData.nameValue} onChange={handlerInputChange} className={formStyles.nameLabel} />
                        <p className={formStyles.nameError}>{error.nameError}</p>
                    </div>
                </div>
                <div className={formStyles.section}>
                    <div className="label">
                        <label>Email</label>
                    </div>
                    <div className="textBox">
                        <input type="text" id="mail" name='mail' value={contactData.mailValue} onChange={handlerInputChange} className={formStyles.email} />
                        <p className={formStyles.nameError}>{error.mailError}</p>
                    </div>
                </div>
                <div className={formStyles.mobileSection}>
                    <div className={formStyles.section}>
                        <div className="label">
                            <label>Mobile</label>
                        </div>
                        <div className="textBox">
                            <input type="text" id="mobile" name='mobile' value={contactData.mobileValue} onChange={handlerInputChange} className={formStyles.mobile} />
                            <p className={formStyles.nameError}>{error.mobileError}</p>
                        </div>
                    </div>
                    <div className={formStyles.landlineSection} id="landline">
                        <div className="label">
                            <label>Landline</label>
                        </div>
                        <div className="textBox">
                            <input type="text" id="landline" name='landline' value={contactData.landlineValue} onChange={handlerInputChange} className={formStyles.landlineText} />
                            <p className={formStyles.nameError}>{error.landlineError}</p>
                        </div>
                    </div>
                </div>
                <div className={formStyles.section}>
                    <div className="label">
                        <label>Website</label>
                    </div>
                    <div className="textBox">
                        <input type="text" id="website" name='website' value={contactData.websiteValue} onChange={handlerInputChange} className={formStyles.website} />
                        <p className={formStyles.nameError}>{error.websiteError}</p>
                    </div>
                </div>
                <div className={formStyles.section}>
                    <div className="label">
                        <label>Address</label>
                        <p id="addressError"></p>
                    </div>
                    <div className="textBox">
                        <input type="text" id="address" name='address' value={contactData.addressValue} onChange={handlerInputChange} className={formStyles.address} />
                        <p className={formStyles.nameError}>{error.addressError}</p>
                    </div>
                </div>
                <div>
                    {props.selectedMode === "edit" ? (
                        <button className={formStyles.button} onClick={updateForm}>Update</button>
                    ) : (
                        <button className={formStyles.button} onClick={submitForm}>Add</button>
                    )}
                    {/* <button className={formStyles.button} onClick={submitForm}>Add</button> */}
                    {/* <PrimaryButton text='Add'/> */}
                </div>
            </form>
        </div>
    )
}
export default DisplayForm