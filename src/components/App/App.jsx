import { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    return savedClicks ? JSON.parse(savedClicks) : {
      good: 0,
      neutral: 0,
      bad: 0,
 
  }});

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(feedback))
  },[feedback])

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}  />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} totalFeedback={totalFeedback}/>
      )}
    </div>
  );
}
