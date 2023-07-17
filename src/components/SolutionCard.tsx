import { Typography } from "@mui/material";
import './SolutionCard.css';

export const SolutionCard = (props: any) => {
    const isCorrect = props.solutionPageData[props.index].selectedOption===props.solutionPageData[props.index].correctOption;
    const isNotAnswered = props.solutionPageData[props.index].selectedOption===0;
    return (
      <div>
        <Typography variant="body1">
          Q{props.index + 1}: {props.solutionPageData[props.index].question} <span className={isNotAnswered? "option-check-span-unanswered":isCorrect? "option-check-span-correct": "option-check-span-incorrect"}>{isNotAnswered? 'Unattempted' :isCorrect ? 'Correct': 'Incorrect'}</span>
        </Typography>
        <ol>
          <li>{props.solutionPageData[props.index].options[0]}</li>
          <li>{props.solutionPageData[props.index].options[1]}</li>
          <li>{props.solutionPageData[props.index].options[2]}</li>
          <li>{props.solutionPageData[props.index].options[3]}</li>
        </ol>
        <Typography variant="body1">
          selected option :{" "}
          {props.solutionPageData[props.index].selectedOption > 0
            ? props.solutionPageData[props.index].selectedOption
            : "NA"}
        </Typography>
        <Typography variant="body1">
          correct option: {props.solutionPageData[props.index].correctOption}
        </Typography>
        <hr />
      </div>
    );
}