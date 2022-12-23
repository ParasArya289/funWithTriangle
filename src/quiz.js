import { useState } from "react";
import "./quiz.css";
let questions = [
  {
    text: "How many sides does a triangle have?",
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "3", isCorrect: true },
      { id: 2, text: "4", isCorrect: false },
      { id: 3, text: "0", isCorrect: false },
    ],
  },
  {
    text: "Which ancient Greek philosopher studied triangles?",
    options: [
      { id: 0, text: "Plato", isCorrect: false },
      { id: 1, text: "Socrates", isCorrect: false },
      { id: 2, text: "Aristotle", isCorrect: false },
      { id: 3, text: "Pythogoras", isCorrect: true },
    ],
  },
  {
    text: "What is a hypotenuse? ",
    options: [
      { id: 0, text: "A triangle with four sides", isCorrect: false },
      { id: 1, text: "The total length of a triangle", isCorrect: false },
      { id: 2, text: "A triangle with 3 right angles", isCorrect: false },
      { id: 3, text: "The longest side of a triangle", isCorrect: true },
    ],
  },
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

  let restartGame = () => {
    setScore(0);
    setShowResults(false);
    setCurrentQuestion(0);
  };

  return (
    <div>
      <h1 className="heading">
        <span>Triangle</span> Quiz
      </h1>
      <h2 className="heading">Score: {score}</h2>
      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul className="ul-quiz">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  className="li-quiz"
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
