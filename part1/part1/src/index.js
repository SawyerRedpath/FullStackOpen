import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  if (!props.totalReviews) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <Statistic name="Good" value={props.good}></Statistic>
        <Statistic name="Neutral" value={props.neutral}></Statistic>
        <Statistic name="Bad" value={props.bad}></Statistic>
        <Statistic name="All" value={props.totalReviews}></Statistic>
        <Statistic name="Average" value={props.averageReview}></Statistic>
        <Statistic
          name="Positive Percentage"
          value={props.positivePercentage}
        ></Statistic>
      </tbody>
    </table>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistic = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.value}</td>
  </tr>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalReviews = good + neutral + bad;

  const averageReview = good - bad / totalReviews;

  const positivePercentage = (good / totalReviews) * 100;

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h3>Give Feedback</h3>
      <Button handleClick={handleGoodClick} text="Good"></Button>
      <Button handleClick={handleNeutralClick} text="Neutral"></Button>
      <Button handleClick={handleBadClick} text="Bad"></Button>
      <h3>Statistics</h3>
      <Statistics
        totalReviews={totalReviews}
        averageReview={averageReview}
        positivePercentage={positivePercentage}
        good={good}
        neutral={neutral}
        bad={bad}
      ></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
