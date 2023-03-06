import { v4 as uuidv4 } from 'uuid';
import { IpersonDetails } from '../model/model';

const person1={id:uuidv4(),name:"Chandermani Arora",mail:"chandermani@technovert.com",mobile:"+91 9292929292",landline:"040301231211",website:"http://www.technovert.com",address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"} as IpersonDetails;
const person2={id:uuidv4(),name:"Sashi Pagadala",mail:"sashipadigala@technovert.com",mobile:"+91 92929292922",landline:"040 30 1231211",website:"http://www.technovert.com",address:"123 nowhere\nSome street\n Madhapur,Hyderabad 500033"} as IpersonDetails;
const person3={id:uuidv4(),name:"Praveen Battula",mail:"praveenbattula@technovert.com",mobile:"+91 92929292922", landline:"040 30 1231211",website:"http://www.technovert.com",address:"123 nowhere\nSome street\nMadhapur,Hyderabad 500033"} as IpersonDetails;
const person4={id:uuidv4(),name:"Vijay Yalamanchili",mail:"vijayyalamanculi@technovert.com",mobile:"+91 92929292922", landline:"040 30 1231211",website:"http://www.technovert.com",address:"123 nowhere Some street Madhapur,Hyderabad 500033"} as IpersonDetails;
export let contacts=[person1,person2,person3,person4];
export const addContact=(contactList:IpersonDetails[],contact:IpersonDetails)=>{
    contact.id=uuidv4();
    contactList.push(contact);
    return(addContact)
}

// export const deleteContactById=(id:string):void=>{
//     console.log("deletecontactbyid");
// }



















