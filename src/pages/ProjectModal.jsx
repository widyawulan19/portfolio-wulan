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

        <div className="modal-container">
            <h2>{data.overview.title}</h2>
            <div className="modal-pic">
                <img src={data.img} alt="" />
            </div>

            <div className="main-modal">
                <div className="modal-box">
                    <label>OVERVIEW</label>
                    {/* <hr className="line"/> */}
                    <p>{data.overview.description}</p>
                </div>
                
                <div className="modal-box">
                    <label>PROBLEM</label>
                    {/* <hr className="line"/> */}
                    <ul>
                        {data.problem.map((item,i) =>(
                            <li key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="modal-box">
                    <label>GOALS</label>
                    {/* <hr className="line"/> */}
                    <ul>
                        {data.goal.map((item,i) =>(
                            <li key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="modal-box">
                    <label>SOLUTIONS</label>
                    {/* <hr className="line"/> */}
                    <p>{data.solution}</p>
                </div>

                <div className="modal-box">
                    <label>KEY THINKING</label>
                    {/* <hr className="line"/> */}
                    <p>{data.keyThinking}</p>
                </div>

                <div className="modal-box">
                    <label>RESULT</label>
                    {/* <hr className="line"/> */}
                    {data.result && (
                        <ul>
                            {data.result.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
                
            </div>

            <div className="main-modal">
                
            </div>

        </div>
        
      </div>
    </div>
  );
}

export default ProjectModal;