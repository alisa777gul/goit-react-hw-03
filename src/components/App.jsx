
import './App.css'
import { useState, useEffect } from 'react'
import Description from './description/Description'
import Feedback from './feedback/Feedback'
import Options from './options/Options'
import Notification from './notification/Notification';

function App() {
  
 const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
   const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback || reviews;
  });



 useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
 }, [feedback]);
  
 const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  let positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  
  const updateFeedback = feedbackType => {

    if (feedbackType == "reset") {
      setFeedback(reviews);
      window.localStorage.removeItem("feedback")
    }
    else {
      setFeedback((startFeedback) => ({
        ...startFeedback, [feedbackType]: startFeedback[feedbackType] + 1,
      }));
    }
  }
  
  feedback.positive = positiveFeedback;
  

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback {...feedback }   /> : <Notification/>}
      
      
    </>
  )
}

export default App
