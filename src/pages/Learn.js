import React from 'react';
import '../styles/Learn.css';

const Learn = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Introduction to Trading',
      description: 'Learn the basics of financial markets and trading fundamentals.',
      duration: 15,
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Technical Analysis',
      description: 'Understanding charts, trends, and basic technical indicators.',
      duration: 20,
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'Risk Management',
      description: 'Master the essential principles of risk management in trading.',
      duration: 25,
      level: 'Intermediate'
    }
  ];

  return (
    <div className="learn">
      <section className="learn-hero">
        <h1>Learning Center</h1>
        <p>Master trading with our comprehensive educational resources</p>
      </section>

      <section className="tutorials">
        <h2>Featured Tutorials</h2>
        <div className="tutorials-grid">
          {tutorials.map(tutorial => (
            <div key={tutorial.id} className="tutorial-card">
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <div className="tutorial-meta">
                <span>{tutorial.duration} min</span>
                <span>{tutorial.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Learn;