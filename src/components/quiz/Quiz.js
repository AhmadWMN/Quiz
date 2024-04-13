import React, {useRef, useState, useEffect } from "react";
import questions from "../../data/QuizData";
import "./Quiz.css";

const Quiz = () => {

    const [count , setCount] = useState(0);
    const [question , setQuestion] = useState(questions[count]);
    const [result , setResult] = useState(0);
    const [lock , setLock] = useState(false);
    const liRef = useRef(null);

    
    const checkCorrectness = (e,choice)=> {

        setLock(true);
        if (question.correctAnswer === choice) {

            e.target.style.background = 'green';
            setResult(result+1);
            
        } else {

            e.target.style.background = 'red';
            console.log("Not correct");

        }
    }

    const handleNextButton =()=>{

        const elements = liRef.current.getElementsByClassName('choice');

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = 'antiquewhite';
          }

        setCount(count+1);
        setLock(false);

    }


    useEffect(() => {
        setQuestion(questions[count]);
      }, [count]);

    useEffect(()=> {
        console.log(result);
    },[result]);

    return(

        <div className="topContainer">

        <h1>Quiz App</h1>
        <hr/>
        <p>Quastion #{count + 1} : {question.question}</p>
        <ul ref ={liRef}>
        {question.choices.map((choice,index) => {
            return(<li className="choice" key={index} onClick={!lock?(e)=>checkCorrectness(e,choice):undefined}>{choice}</li>);
        })}
        </ul>

        <button onClick={()=>{
            handleNextButton()
            }}>Next</button>

        <p>{count+1} of {questions.length} questions</p>
        </div>
    );

}

export default Quiz;