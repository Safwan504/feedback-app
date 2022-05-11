import { useState } from "react";
import AllFeedBack from "./components/AllFeedBack/AllFeedBack";
import FakeData from "./components/FakeData/FakeData";
import Header from "./components/Header/Header";
import FeedbackStat from "./components/FeedbackStat/FeedbackStat";
import './components/Feedback/Feedback.css';
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {
  const [feedback, setFeedBack] = useState(FakeData);

  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete?")) {
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }

  const handleAddFeedback = (addFeedback) => {
    addFeedback.id = feedback.length + 1
    const newFeedBack = [addFeedback, ...feedback];
    setFeedBack(newFeedBack)
  }
  return (
    <>
      <Header />
      <div className="FeedbackUI">
        <FeedbackForm handleFeedback={handleAddFeedback}/>
        <FeedbackStat feedback={feedback} />
        <AllFeedBack
          feedback={feedback}
          handleDelete={handleDelete}
        />
      </div>

    </>
  );
}

export default App;
