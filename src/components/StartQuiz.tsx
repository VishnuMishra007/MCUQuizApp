import { Button } from "@mui/material";
import { QuizGuidelines } from "./QuizGuidelines";
import { useState } from "react";
import { QuizQuestionaires } from "./QuizQuestionaires";
import './StartQuiz.css';
import { Provider } from "react-redux";
import store from "../store/ReactStore";
import { QuizResultBoard } from "./QuizResultBoard";
import { getUserScoreCard } from "../utilities/QuizServices";

export const StartQuiz = (props: any) => {
    const [start,setStart] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const startQuizHandler = () => {
        setStart(true);
    }
    const submitQuizHander = (actionVal: string) => {
        if(actionVal==='submit'){
            setIsSubmitted(true);
            return;
        }
    } 
    return(<Provider store={store}>
        <div className="startquiz-container">  
          {
           start ? (isSubmitted ? <QuizResultBoard {...getUserScoreCard()}/>  : <QuizQuestionaires submitQuizHander={submitQuizHander}/>)
            : <div>
            <QuizGuidelines/>
            <Button variant="contained" color="primary" onClick={startQuizHandler}>Start Quiz</Button>
           </div>
        }
        </div>
        </Provider>
    );
};