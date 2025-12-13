import React,{useEffect} from 'react'
import "../components/Experience.css";
import Button from 'react-bootstrap/Button';
import { FaLinkedin,FaEnvelope} from "react-icons/fa6";

export default function Connect() {
     useEffect(() => {
          const reveals = document.querySelectorAll(".reveal");
        
          const revealOnScroll = () => {
            reveals.forEach((el) => {
              const windowHeight = window.innerHeight;
              const elementTop = el.getBoundingClientRect().top;
        
              if (elementTop < windowHeight - 100) {
                el.classList.add("active");
              }
            });
          };
        
          window.addEventListener("scroll", revealOnScroll);
          return () => window.removeEventListener("scroll", revealOnScroll);
        }, []);
  return (
    <div className="reveal" style={{ display: "flex", gap: "20px", alignItems: "center",padding:"50px" }}>
         <Button variant="outline-primary" href="mailto:minalkrishna66@gmail.com" style={{borderColor:"#00FFFF",color:"#00FFFF",fontFamily: "Poppins, Arial, Helvetica, sans-serif"}}><FaEnvelope style={{paddingRight:"5px",fontSize:"20px"}} />Say hi</Button>
         <Button variant="outline-primary" href="https://www.linkedin.com/in/minal-k-2b8baa224"  target="_blank" style={{borderColor:"#00FFFF",color:"#00FFFF",fontFamily: "Poppins, Arial, Helvetica, sans-serif"}}><FaLinkedin style={{paddingRight:"5px",fontSize:"20px"}}/>Lets Connect!</Button>
    </div>
       
  )
}
{/*  */}
