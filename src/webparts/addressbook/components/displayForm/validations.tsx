export interface IValidDetails{
    validName:string,
    validMail:string,
    validMobile:string,
    validLandline:string,
    validWebsite:string,
    validAddress:string
}
export const Validate=(type: string, input: string)=>{ 
    
    //const [validDetails,setValidDetails]=useState({validName:"false",validMail:"false",validMobile:"false",validLandline:"false",validWebsite:"false",validAddress:"false"});
    
    switch (type) {
        case "name":
            return nameValidation(input);
        case "email":
            return mailValidation(input);
        case "mobile":
            return mobileValidation(input);
        case "landline":
            return landlineValidation(input);
        case "website":
            return websiteValidation(input);
        case "address":
            return addressValidation(input);
    }
    return "false";
}

const nameValidation=(name:string)=>{
    console.log("vali");
    const nameFormat=/^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    return(name===""?"Please Enter name":((name.match(nameFormat)?("")
        :"Enter valid name")))

}

const mailValidation=(mail:string)=>{
    console.log("checkingmail");
    const mailFormat=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("mailvalida");
    console.log(mail);
    return(mail===""?"Please Enter your Email":((mail.match(mailFormat)?""
        :"Enter valid Email")))

} 

const mobileValidation=(mobile:string)=>{
    console.log("mobilecheck");
    const mobileFormat=/^\d{10}$/;
    return(mobile===""?"Please Enter your mobile number":((mobile.match(mobileFormat)?""
        :"Enter valid mobile number")))

}

const landlineValidation=(landline:string)=>{
    console.log("landline");
    const landlineFormat=/^\d{3} \d{2} \d{7}$/;
    return(landline===""?"Please Enter your Landline number":((landline.match(landlineFormat)?""
        :"Enter valid landline number")))

}

const websiteValidation=(website:string)=>{
    console.log("website");
    const websiteFormat=/^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return(website===""?"Please Enter website":((website.match(websiteFormat)?""
        :"Enter valid website")))

}

const addressValidation=(address:string)=>{
    console.log("mobilecheck");
    return(address===""?"Please Enter Address":"");

}
