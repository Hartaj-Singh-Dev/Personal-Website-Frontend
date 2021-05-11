import React,{useState} from "react";
import { Element } from "react-scroll";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { IconButton } from "@material-ui/core";
import { Link } from "react-scroll";
import * as EmailValidator from 'email-validator';
import "../Styles/Contact.css";

const Contact = () => {
  const [Error, setError] = useState("")
  const [userData, setuserData] = useState({ 
     name:'',
     email:'',
     phone:'',
     message:''
  })

  const updateValue = (event)=>{
    const name = event.target.name
    const data = event.target.value

    setuserData({...userData , [name]:data})
  }

  const postData = async (e)=>{
    e.preventDefault()
    const {name ,email ,phone , message} = userData
    if(!name || !email || !phone || !message){
      setError("Something is missing")
    }else if(!EmailValidator.validate(email)){
      setError("Sorry Email is incorrect")
    }else{
      setError('')
   const data = {
     name:name,
     email:email,
     phone:parseInt(phone),
     message:message
   }
    console.log("Submitted");
    alert("Thanku for your response I will try to reach out you as soon as possible")
    setuserData({name:'',email:'',phone:'',message:''})

   await fetch('https://hartajsingh.herokuapp.com/postData',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      mode:'cors',
      body:JSON.stringify(data)
    }).then((res)=>{ console.log(res)}).catch((err)=>{console.log(err);})
    }
  }
  return (
    <React.Fragment>
      <Element id="contact" name="contact">
        <section className="contact">
          <div className="contactform">
          <h2 className="contactFormHeading" style={{textAlign:'center' ,color:'white' ,marginBottom:'1rem'}}>Get In Touch</h2>
            <div className="contactForm" style={{border:'3px solid #fcfcfc' ,borderRadius:'7px' }}>
              <form method="POST">
                <div className="Input">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={(event)=>{updateValue(event)}}
               
                    className="formInput"
                    required
                  />
                </div>
                <div className="Input">
                  <label htmlFor="name">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={(event)=>{updateValue(event)}}
                    className="formInput"
                    required
                  />
                </div>
                <div className="Input">
                  <label htmlFor="name">Mobile Number</label>
                  <input
                    type="number"
                    name="phone"
                    value={userData.phone}
                    onChange={(event)=>{updateValue(event)}}
  
                    required
                  />
                </div>
                <div className="TextAreaInput">
                  <label htmlFor="name">Your Message</label>
                  <textarea
                  name='message'
                  value={userData.message}
                  onChange={(event)=>{updateValue(event)}}
                    className="formMessage"
                  />
                </div>
                <div className="ErrorandButton" >
                  <div className="error">
                <h1 style={{fontSize:'14px',color:'red'}}>{Error}</h1>
                </div>
                <button
                  type="submit"
                  className="submitButton"
                  onClick={(e) => {
                   postData(e)
                  }}
                >
                  Get In Touch
                </button>
                </div>
              </form>
            </div>
          </div>
          <div className="HomeArrow">
            <Link to="home" spy={true} smooth={true} duration={100} delay={50}>
              <IconButton>
                <ArrowUpwardIcon></ArrowUpwardIcon>
              </IconButton>
            </Link>
            <h4 style={{color:'#fcfcfc' ,fontSize:'10.5px',marginTop:'-9px'}}>Go to top</h4>
          </div>
          <div>
            <span>
            @2021 , Hartaj Singh Production . All rights reserved
            </span>
          </div>
        </section>
      </Element>
    </React.Fragment>
  );
};

export default Contact;
