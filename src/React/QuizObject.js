import React, { useState } from "react";

const QuizObject = () => {
  const [questions] = useState([
    {
      question: "What is 2*(4+4)?",
      answers: ["2", "4", "8", "16"],
      correct: 3,
    },
    {
      question: "What is 9*9?",
      answers: ["18", "81", "80", "79"],
      correct: 1,
    },
    {
      question: "Who was the first president of the United States?",
      answers: [
        "George Washington",
        "John Adams",
        "John Quincy Adams",
        "Thomas Jefferson",
      ],
      correct: 0,
    },
    {
      question: "What state is Philadelphia in?",
      answers: [
        "Commonwealth of Pennsylvania",
        "New Jersey",
        "New York",
        "Massachusetts",
      ],
      correct: 0,
    },
    {
      question:
        "What are the two major political parties in the United States?",
      answers: [
        "Democratic Party & Republican Party",
        "Green Party & Red Party",
        "Bull Party & Moose Party",
        "Hamilton Party & Burr Party",
      ],
      correct: 0,
    },
  ]);
  return (
    <>
      <Quiz questions={questions} />
    </>
  );
};

const Quiz = ({ questions }) => {
  //   console.log(questions);
  const [renderedQues, setRenderedQues] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleAnswer = (id) => {
    // console.log(id, score);
    if (renderedQues < questions.length - 1) {
      questions[renderedQues].correct === id && setScore(score + 1);
    }

    if (renderedQues < questions.length - 1) {
      setRenderedQues(renderedQues + 1);
    }
    //if (renderedQues === questions.length - 1) {
    if (questions[renderedQues].correct === id) {
      // console.log(score);
      setHighScore(((score + 1) / questions.length) * 100);
    }
    // console.log(highScore, "%");
    //}
  };

  const handlePrev = () => {
    renderedQues !== 0 && setRenderedQues(renderedQues - 1);
  };

  const handleNext = () => {
    // console.log(renderedQues, questions.length);
    if (renderedQues < questions.length - 1) {
      setRenderedQues(renderedQues + 1);
    }
  };

  return (
    <div className="m-2">
      <h6>
        {renderedQues + 1}. {questions[renderedQues].question}
      </h6>
      <ol type="a">
        {questions[renderedQues].answers.map((option, id) => {
          return <li onClick={() => handleAnswer(id)}>{option}</li>;
        })}
      </ol>
      <div className="d-flex justify-content-start">
        <p onClick={handlePrev}>Prev </p>
        <p onClick={handleNext}> Next</p>
        <h4 className="ms-5">High Score:{highScore}%</h4>
      </div>
    </div>
  );
};
export default QuizObject;
