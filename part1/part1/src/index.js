import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part partName={props.part1} numExercises={props.exercises1}></Part>
      <Part partName={props.part2} numExercises={props.exercises2}></Part>
      <Part partName={props.part3} numExercises={props.exercises3}></Part>
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Total number of exercises -{' '}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.partName} - {props.numExercises} exercises
    </p>
  );
};

const App = () => {
  const course = 'Half Stack appication development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
