import React, { useState,useEffect } from "react";
import "../components/Experience.css";
import { FaPlay } from "react-icons/fa6";
const experience = [
  {
    id: 0,
    name: "Natwest",
    designation: "Software Engineer @ NatWest",
    period: "October 2023 - Present",
    description: [
      "Currently working in the API Engineering team and contributing to scaling initiatives by designing a decoupled microservice architecture that is aimed at scaling service from 500 TPS to 2500 TPS.",
      "Drove platform efficiency by migrating 15+ microservices from RabbitMQ to Kafka, achieving a 35% reduction in latency and significant reliability gains.",
      "Engineered a high-utility banking application (React Native & Node.js) for seamless business checkout.",
      "Enhanced system compliance by upgrading 5+ microservices from Java 8 to Java 17 and leveraging AWS Inspector to identify and remediate approximately 250 security vulnerabilities.",
      "Demonstrated technical innovation by developing Face Pay, an AI-powered payment application (Flutter & Mobile FaceNet), which was showcased publicly at API Days."

    ]
  },
  {
    id: 1,
    name: "KPMG",
    designation: "Analyst Intern @ KPMG",
    period: "March 2023 - July 2023",
    description:
    [
      "Completed rigorous technical training in Microsoft 365 tools, Power BI, computer networking (OSI Model, TCP/IP)",
      "Delivered assignments and client-style presentations, showcasing communication and documentation skills",
      "Collaborated with team members on structured tasks in a corporate environment"
    ]
  }
];

export default function Experience() {
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
  const [selected, setSelected] = useState(experience[0].id); 
  const item = experience.find((e) => e.id === selected);
  if (!item) return null; 
  const descArray = Array.isArray(item.description)
    ? item.description
    : [item.description];

  return (
    <>
    < h3 className="reveal" style={{ textAlign: "left",color:"#00FFFF",padding:"10px",fontFamily: "Poppins, Arial, Helvetica, sans-serif"}} id="experience">Experience</h3>
    <div className="experience-wrapper reveal" >  
      <div className="experience-left">
        {experience.map((e) => (
          <p
            key={e.id}
            className={`experience-title ${selected === e.id ? "active" : ""}`}
            onClick={() => setSelected(e.id)}
          >
            {e.name}
          </p>
        ))}
      </div>

      <div className="experience-right">
         <p className="experience-designation">{item.designation}</p>
          <p className="experience-period">{item.period}</p>

        {descArray.map((line, idx) => (
          <div key={idx} style={{display: "flex",alignItems:"flex-start" }}>
             <FaPlay style={{color: "#00FFFF",
              marginRight: "10px",        
              marginTop:" 6px",  
              flexShrink:" 0",fontSize:"10px"}} />
            <p className="experience-description">{line}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
