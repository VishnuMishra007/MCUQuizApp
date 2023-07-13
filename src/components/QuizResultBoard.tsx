import { Star } from "@mui/icons-material";
import { Rating, Typography } from "@mui/material";
import './QuizResultBoard.css';

export const QuizResultBoard = (props: any) => {
    return(
        <div className="quiz-result-container">
            <Typography variant="h6" component="h6" color='black'>{props.isPassed ? `You've craked the quiz! Congratulations!`: 'Try better next time, Good luck !'}</Typography>
            <div className="score-animation">
            <div className="total-score">
                <Typography variant="body1" fontSize="30px">You Scored </Typography>
                <Typography variant="body1" fontSize="60px">{props.percentage}%</Typography>
            </div>
            <div className="user-score">
            </div>
            </div>
            <div className="quiz-result">
             <Typography component="legend">{props.scoreCategory}</Typography>
                <Rating name={"good"} precision={0.5} value={props.correct/2} emptyIcon={<Star style={{opacity: .65}} fontSize="inherit"/>} readOnly/>
            </div>
        </div>
    );
}