import * as React from "react"
import headerStyles from './header.module.scss'
import { IHeaderProps } from "./iheaderProps"

const Header=(props:IHeaderProps): JSX.Element=>{      
    return(
        <div className='Header'>
            <div className={headerStyles.titleBar}>
                <p>Address Book</p>
            </div>
            <div className={headerStyles.nav}>
            <nav>
                <div className={headerStyles.nav}>
                    <button className={headerStyles.btn1} onClick={()=>{props.toggleForm(false), console.log('home')}}>HOME</button>
                    <button className={headerStyles.btn2} onClick={()=>{props.toggleForm(true);props.setMode("view");props.selectContact({id:"",name:"",mail:"",mobile:"",landline:"",website:"",address:""})}}>+ADD</button>
                    <div className={headerStyles.logo}><img src={require("../../assets/blog-icon.png")} alt="logo" id="logo"/></div>
                </div>
            </nav>
        </div>

        </div>
    )
}
export default Header