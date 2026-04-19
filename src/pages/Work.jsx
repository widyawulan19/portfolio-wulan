import React from "react";
import '../styles/Work.css'

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
  return (
    <section className="how-container">
      <h5>Process</h5>
      <h2>How I Work</h2>

      <div className="timeline">
        {steps.map((step) => (
          <div className="timeline-item" key={step.id}>
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