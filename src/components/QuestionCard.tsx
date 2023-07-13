import { Button } from "@mui/material";
import { QuizQuestionsData } from "../constants/QuizQuestionsData";

import './QuestionCard.css';
import { getIsCorrect } from "../utilities/QuizServices";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import store from "../store/ReactStore";

export const QuestionCard = (props: {queNo: number, preSelected: number}) => {
    const [selected, setSelected] = useState<number>(props.preSelected);
    const dispatch = useDispatch();
    useEffect(()=>{
        setSelected(props.preSelected);
    },[props.preSelected]);
    const optionSelectionHandler = (event:  React.MouseEvent<HTMLButtonElement>) => {
        let currentValue = parseInt(event.currentTarget.value);
        if(currentValue !== selected){
            dispatch({type: 'SAVE_DATA', payload: {questionNo: props.queNo,
                selectedOption: currentValue,
                isCorrect: getIsCorrect(currentValue,props.queNo)}});
                setSelected(currentValue);
       }
       console.log("Current State: ");
       console.log(store.getState());
    }  

    return(
        <div className="question-card">
            <div className="que-div">{`Q-${props.queNo}. ${QuizQuestionsData.Questions[props.queNo-1]}`}</div>
            {QuizQuestionsData.Options[props.queNo-1].map((item , index)=><Button className={selected===index+1 ? 'selected': ''} key={`${props.queNo}-opt-${index}`} variant="outlined" onClick={optionSelectionHandler} value={index+1}>{item}</Button>)} 
        </div>
    );
};


