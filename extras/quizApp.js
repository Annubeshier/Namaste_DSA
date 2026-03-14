import React, { useState } from "react";

const quizData = [
  {
    question: "What is React?",
    options: [
      "Library for UI",
      "Database",
      "Programming Language",
      "Framework for backend"
    ],
    answer: "Library for UI"
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState"
  },
  {
    question: "React is developed by?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook"
  }
];

function QuizApp() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {

    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Quiz App</h1>

      {showResult ? (
        <div>
          <h2>Your Score: {score} / {quizData.length}</h2>
          <button onClick={restartQuiz}>Restart</button>
        </div>
      ) : (
        <div>
          <h2>{quizData[currentQuestion].question}</h2>

          {quizData[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <button onClick={() => handleAnswer(option)}>
                {option}
              </button>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default QuizApp;