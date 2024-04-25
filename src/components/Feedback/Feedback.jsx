export default function Feedback({ feedback, totalFeedback }) {
  const { good, neutral, bad } = feedback;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive : {positiveFeedback} % </p>
    </div>
  );
}
