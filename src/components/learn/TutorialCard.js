import React from 'react';

function TutorialCard({ title, description, duration, level }) {
  return (
    <div className="tutorial-card">
      <div className="tutorial-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tutorial-meta">
          <span className="duration">{duration} min</span>
          <span className="level">{level}</span>
        </div>
      </div>
    </div>
  );
}

export default TutorialCard;