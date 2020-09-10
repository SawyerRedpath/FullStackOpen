import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} section={part}></Part>
      ))}
      <h4>total of {totalExercises} exercises</h4>
    </div>
  );
};

export default Content;
