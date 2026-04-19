import React, { useEffect } from "react";
import '../styles/Work.css'
import AOS from 'aos'

const steps = [
  {
    id: "01",
    title: "Understanding the Problem",
    desc: "I identify user needs and define the core problem to solve.",
  },
  {
    id: "02",
    title: "Planning the Solution",
    desc: "I structure the flow and design a solution that is clear and scalable.",
  },
  {
    id: "03",
    title: "Building the Product",
    desc: "I develop the application with clean code and modern technologies.",
  },
  {
    id: "04",
    title: "Testing & Refinement",
    desc: "I ensure usability, consistency, and smooth user experience.",
  },
  {
    id: "05",
    title: "Delivery",
    desc: "I deliver a reliable product that meets user and business needs.",
  },
];

function Work() {

  useEffect(() =>{
    AOS.init({
      duration:1000,
      once:false
    })
  })

  return (
    <section className="how-container" id="work">
      <h5>Process</h5>
      <h2>How I Work</h2>

      <div className="timeline">
        {steps.map((step, index) => (
          <div className="timeline-item" 
            key={step.id}
            data-aos='fade-up'
            data-aos-delay={index * 100}
          >
            <div className="dot"></div>

            <div className="content">
              <span className="step">{step.id}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;