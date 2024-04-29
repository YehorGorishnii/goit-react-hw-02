export default function Feedback({ feedback, positiveFeedback }) {
  const { good, neutral, bad } = feedback;
  

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive : {positiveFeedback} % </p>
    </div>
  );
}
