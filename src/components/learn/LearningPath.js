import React from 'react';
import { learningPathSteps } from '../../data/learningPathData';

function LearningPath() {
  return (
    <section className="learning-path">
      <h2>Your Learning Journey</h2>
      <div className="path-steps">
        {learningPathSteps.map((step, index) => (
          <div key={step.id} className="path-step">
            <div className="step-number">{index + 1}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningPath;