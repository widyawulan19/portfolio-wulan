import React from "react";
import '../styles/Projects.css'

function ProjectModal({ data, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* HEADER */}
        <img src={data.img} alt="" />
        <h2>{data.title}</h2>
        <p className="headline">{data.headline}</p>

        {/* OVERVIEW */}
        <section>
          <h4>Overview</h4>
          <p>{data.overview.description}</p>
        </section>

        {/* PROBLEM */}
        <section>
          <h4>Problem</h4>
          <ul>
            {data.problem.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* GOAL */}
        <section>
          <h4>Goal</h4>
          <ul>
            {data.goal.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* SOLUTION */}
        <section>
          <h4>Solution</h4>
          <p>{data.solution}</p>
        </section>

        {/* MAIN FEATURE */}
        {data.mainFitur && (
          <section>
            <h4>Key Features</h4>
            <ul>
              {data.mainFitur.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* USER FLOW */}
        <section>
          <h4>User Flow</h4>
          <ol>
            {data.userFlow.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        {/* KEY THINKING */}
        <section>
          <h4>Key Thinking</h4>
          <p>{data.keyThinking}</p>
        </section>

        {/* RESULT */}
        {data.result && (
          <section>
            <h4>Result</h4>
            <ul>
              {data.result.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* STACK */}
        <div className="stack-tags">
          {data.stack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;