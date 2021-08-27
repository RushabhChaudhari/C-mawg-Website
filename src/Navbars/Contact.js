import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import EmailIcon from '@material-ui/icons/Email';
import '../App.css'

const Contact = () => {
    return (
        <div style={{marginTop:'90px'}}>
            <div className="container" style={{padding:'50px',backgroundColor:'coral',borderRadius:'20px',boxShadow:'6px 6px 6px silver'}}>
                <div className='contact1'><h3><span className="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px orangered',backgroundColor:'black'}}><ContactPhoneIcon style={{fontSize:'50'}}></ContactPhoneIcon></span> <div className='contact'><span className="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px orangered',backgroundColor:'black'}}>9726014578</span></div></h3></div>
                <div className='contact1'><h3><span className="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px orangered',backgroundColor:'black'}}><EmailIcon style={{fontSize:'50'}}></EmailIcon></span> <div className='contact'><span className="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px orangered',backgroundColor:'black'}}>rushabh28042002@gmail.com</span></div></h3></div>
            </div>
        </div>
    )
}

export default Contact
