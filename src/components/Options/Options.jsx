export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  const handleClick = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  return (
    <div>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}> Reset </button>}
    </div>
  );
}
