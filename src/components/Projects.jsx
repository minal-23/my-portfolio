import Carousel from 'react-bootstrap/Carousel';
import '../components/Projects.css';
import "../components/Experience.css";
import React, { useState,useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
export default function Projects() {
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
    <>
     <h3 className="reveal" style={{ textAlign: "left",color:"#00FFFF",padding:"10px",fontFamily: "Poppins, Arial, Helvetica, sans-serif"}} id="projects">Projects</h3>
    <Carousel className="projects-carousel reveal">
    
      <Carousel.Item>
        <img
          className="d-block"
          src={`${process.env.PUBLIC_URL}/facepay.png`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"#00FFFF",fontFamily: "Poppins, Arial, Helvetica, sans-serif" }}>FacePay</h3>
<p style={{fontFamily:"Poppins" }}>UPI payments done by scanning the recipient’s face, no phone number or QR code required.</p>
          <div style={{gap: '10px', display: 'flex', justifyContent: 'center'}}>

<a
  href="https://drive.google.com/file/d/1VZUUmWQRsB9rhMiUNhhL4SdDiFYdtoXn/view"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaArrowUpRightFromSquare style={{color:'#00FFFF'}} />
</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src={`${process.env.PUBLIC_URL}/loanpayment.png`}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"#00FFFF",fontFamily: "Poppins, Arial, Helvetica, sans-serif" }}>Loan Payment Tracker</h3>
          <p style={{fontFamily: "Poppins, Arial, Helvetica, sans-serif" }}>Smart EMI monitoring made simple</p>
          <div style={{gap: '10px', display: 'flex', justifyContent: 'center'}}>
            <a
  href="https://github.com/minal-23/Loan-Management-System"
  target="_blank"
  rel="noopener noreferrer"
>
          <FaGithub style={{color:'#00FFFF'}}/>
          </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src={`${process.env.PUBLIC_URL}/research.jpg`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"#00FFFF",fontFamily: "Poppins, Arial, Helvetica, sans-serif" }}>ML Engine for Linux Scheduler</h3>
          <p style={{fontFamily: "Poppins, Arial, Helvetica, sans-serif"}}>Optimizing Linux Scheduling Using Gradient-Boosted Process Prediction</p>
          <div style={{gap: '10px', display: 'flex', justifyContent: 'center'}}>
            
         
         <a
  href="https://drive.google.com/file/d/1IB0U7JjR0QSk7ToXI1mglslrPP3TfNDB/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
><FaArrowUpRightFromSquare style={{color:'#00FFFF'}}/></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
