import React from 'react'
import Graphicimg from '../Image/Graphicimg.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import 'mdb-ui-kit/css/mdb.min.css'
import Welcome from '../Image/Welcome.jpg'


const About = () => {
    return (
        <div>
        <div className="container" style={{padding:'50px',backgroundColor:'rgb(170,251,170)',borderRadius:'20px',boxShadow:'6px 6px 6px silver'}}>
           <h1><span className="badge" style={{borderRadius:'10px',boxShadow:'6px 6px 6px green',backgroundColor:'black'}}>Hi I'm Rushabh</span></h1>
           <br />
           <div style={{color:'black',paddingLeft:'30px',fontWeight:'bold'}}>
           <div><span className="material-icons">
near_me
</span><span style={{marginLeft:'5px'}}> I am currently pursuing in B.tech Computer Science and Engineering at IIT(ISM) Dhanbad.</span></div>
           <div><span className="material-icons">
near_me
</span><span style={{marginLeft:'5px'}}> I love Competetive Programming and Web Development.</span></div>
           <div><span className="material-icons">
near_me
</span><span style={{marginLeft:'5px'}}> I design and develop dynamic website for those who have trouble getting the perfect RoadMap.</span></div>
           </div>
        </div>
        <div style={{position:'relative',marginTop:'15px'}}>
        <img className='mx-auto d-block img-fluid' src={Welcome} alt='Welcome' />
        </div>
        </div>
    )
}

export default About
