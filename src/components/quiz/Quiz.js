import React, { useState, useEffect } from "react";
import questions from "../../data/QuizData";
import "./Quiz.css";

const Quiz = () => {

    const [count , setCount] = useState(0);
    const [question , setQuestion] = useState(questions[count]);


    useEffect(() => {
        setQuestion(questions[count]);
      }, [count]);

    return(

        <div className="topContainer">

        <h1>Quize App</h1>

        <hr/>
        <p>Quastion #{count + 1} : {question.question}</p>

        <ul>
        {question.choices.map(choice => {
            return(<li>{choice}</li>);
        })}
        </ul>

        <button onClick={()=>{setCount(count+1)}}>Next</button>

        <p>{count+1} of {questions.length} questions</p>
        </div>
    );

}

export default Quiz;