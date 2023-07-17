import { Star } from "@mui/icons-material";
import { Button, Rating, Typography } from "@mui/material";
import './QuizResultBoard.css';
import {useState} from 'react';
import { SolutionPage } from "./SolutionPage";

export const QuizResultBoard = (props: any) => {
    const [viewSolution, setViewSolution] = useState<boolean>(false);
    const viewSolutionHandler = () => {
        setViewSolution(true);
    }
    return(
        viewSolution ? <SolutionPage/> : <div className="quiz-result-container">
            <Typography variant="h6" component="h6" color={props.isPassed? 'green': 'black'}>{props.isPassed ? `You've cracked the quiz! Congratulations!`: 'Try better next time, Good luck !'}</Typography>
            <div className="score-animation">
            <div className="total-score">
                <Typography variant="body1" fontSize="30px" fontWeight="bold">You Scored </Typography>
                <Typography variant="body1" fontSize="60px" fontWeight="bold">{props.percentage}%</Typography>
            </div>
            </div>
            <div className="quiz-result">
             <Typography component="legend" fontWeight="bold">{props.scoreCategory}</Typography>
                <Rating name={"good"} precision={0.5} value={props.correct/2} emptyIcon={<Star style={{opacity: .65}} fontSize="inherit"/>} readOnly/>
            </div>
            <Button variant="contained" color="success" onClick={viewSolutionHandler}>View Solution</Button>
        </div>
    );
}