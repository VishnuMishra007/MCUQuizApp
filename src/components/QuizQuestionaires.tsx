import { Button } from "@mui/material";
import { QuestionCard } from "./QuestionCard";
import { useState } from "react";
import './QuizQuestionaires.css';
import { IGenericInitialState, I_InitialState } from "../reducers/RootReducer";
import { useSelector } from "react-redux";

export const QuizQuestionaires = (props: any) => {
    const [queNo,setQueNo] = useState<number>(1);
    // const preSelected = useSelector((state: Array<I_InitialState>)=> state[queNo-1]? state[queNo-1].selectedOption: 0);
    const preSelected = useSelector((state: IGenericInitialState<I_InitialState>)=> state[queNo]? state[queNo].selectedOption: 0);
    const nextPrevHandler = (actionVal: string) => {
        if(actionVal==='submit'){
            props.submitQuizHander(actionVal);
            return;
        }
        if(queNo > 1 && actionVal==='prev'){
            setQueNo(queNo-1);
        }else if(queNo<10 && actionVal==='next'){
            setQueNo(queNo+1);
        }
        return;
    };
    return (
        <div className="question-board-container">
            <QuestionCard queNo={queNo} preSelected={preSelected} />
            <div className="button-group">
                <Button variant="contained" hidden={queNo<=1} name='Prev' onClick={()=>nextPrevHandler('prev')}>Prev</Button>
                {queNo===10 ? <Button variant="contained" name='Submit' onClick={()=>nextPrevHandler('submit')}>Submit</Button> :<Button variant="contained" name='Next' onClick={()=>nextPrevHandler('next')}>Next</Button>}
            </div>  
        </div>
    );
}