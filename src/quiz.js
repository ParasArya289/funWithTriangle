import { useState } from "react";

let questions = [
  {
    text: "What is the capital of America?",
    options: [
      { id: 0, text: "New York City", isCorrect: false },
      { id: 1, text: "Boston", isCorrect: false },
      { id: 2, text: "Santa Fe", isCorrect: false },
      { id: 3, text: "Washington DC", isCorrect: true }
    ]
  },
  {
    text: "What year was the Constitution of America written?",
    options: [
      { id: 0, text: "1787", isCorrect: true },
      { id: 1, text: "1776", isCorrect: false },
      { id: 2, text: "1774", isCorrect: false },
      { id: 3, text: "1826", isCorrect: false }
    ]
  }
];

let Quiz = () => {
  let [score, setScore] = useState(0);
  let [showResults, setShowResults] = useState(false);
  let [currentQuestion, setCurrentQuestion] = useState(0);

  let optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  let restartGame = () =>{
    setScore(0);
    setShowResults(false);
    setCurrentQuestion(0);
  }

  return (
    <div>
      {/* 1. Header  */}
      <h1>Triangle Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
