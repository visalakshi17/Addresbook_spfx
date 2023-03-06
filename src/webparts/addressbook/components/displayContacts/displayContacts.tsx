import React from "react";
import displayContactsStyles from "./displayContacts.module.scss";

const DisplayContacts = (): JSX.Element => {
    return (
        <div className={displayContactsStyles.contactSection}>
            <div className={displayContactsStyles.contacts}>
                <h2>CONTACTS</h2>
            </div>
            <div id="chk"></div>
        </div>)
}
export default DisplayContacts