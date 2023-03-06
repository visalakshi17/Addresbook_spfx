import * as React from 'react';
import styles from './Addressbook.module.scss';
import { IAddressbookProps } from './IAddressbookProps';
import Header from './header/header';
import DisplayForm from './displayForm/displayForm';
import { contacts } from '../services/services';
import { IpersonDetails } from '../model/model';
import Contacts from './contacts/contacts';
import DisplayContacts from './displayContacts/displayContacts';
import DisplayPersonDetails from './displayPersonDetails/displayPersonDetails';
//import { escape } from '@microsoft/sp-lodash-subset';
//export default class Addressbook extends React.Component<IAddressbookProps, {}> {

export default class Addressbook extends React.Component<{}, IAddressbookProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      show: false,
      contactList: contacts,
      selectedContact: { id: "", name: "", mail: "", mobile: "", landline: "", website: "", address: "" },
      displayContactDetails: false,
      selectedMode: "view",
      // displayContactDetails:false,
      // currentContacts:[],
      // contactList:contacts,
      // selectedContact:{id:"",name:"",mail:"",mobile:"",landline:"",website:"",address:""},
      // selectedMode:"view",
      // validDetails:{validName:"false",validMail:"false",validMobile:"false",validLandline:"false",validWebsite:"false",validAddress:"false"},
      //errorMsg:{nameError:"",mailError:"", mobileError:"",landlineError:"",websiteError:"",addressError:""}
    };
  }
  //const [validDetails,setValidDetails]=useState({validName:false,validMail:false,validMobile:false,validLandline:false,validWebsite:false,validAddress:false});
  toggleForm = (isVisible: boolean) => { this.setState({ show: isVisible }) }
  setContactList = (contactList: IpersonDetails[]) => { this.setState({ contactList: contactList }) }
  selectContact = (contact: IpersonDetails) => { this.setState({ selectedContact: contact }) }
  toggleContactDetails = (isVisible: boolean) => { this.setState({ displayContactDetails: isVisible }) }
  setMode = (mode: string) => { this.setState({ selectedMode: mode }) }


  public render(): React.ReactElement<IAddressbookProps> {
    //const {
    //   description,
    //   isDarkTheme,
    //   environmentMessage,
    //   hasTeamsContext,
    //   userDisplayName
    //  show
    //} = this.props;
    return (
      <>
        <Header toggleForm={this.toggleForm} setMode={this.setMode} selectContact={this.selectContact}/>
        <div className={styles.Display}>
          <div className={styles.contactDisplay}>
            <DisplayContacts />
            <Contacts setContactList={this.setContactList} contactList={this.state.contactList} toggleContactDetails={this.toggleContactDetails} selectContact={this.selectContact} toggleForm={this.toggleForm} />
          </div>
          <div className={styles.displayForm}>{this.state.show && <DisplayForm contactList={this.state.contactList} selectedContact={this.state.selectedContact} selectedMode={this.state.selectedMode} setMode={this.setMode} toggleForm={this.toggleForm}/>}</div>
          <div className={styles.displayForm}>{this.state.displayContactDetails && <DisplayPersonDetails contactList={this.state.contactList} setContactList={this.setContactList} selectedMode={this.state.selectedMode} toggleForm={this.toggleForm} selectedContact={this.state.selectedContact} setMode={this.setMode} toggleContactDetails={this.toggleContactDetails} />}</div>
        </div>
      </>
    );
  }
}
