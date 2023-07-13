import { QuizGuidelinesStatics } from "../constants/QuizGuidelinesStatics";

import  './QuizGuidelines.css';

export const QuizGuidelines = () => {
    
    return (
        <div className="quiz-guidelines-conatiner">
            <h6>General GuideLines :-</h6>
            <ul className="size-xs">
               {QuizGuidelinesStatics.map((item, index)=>{
                    return <li key={`G-${index+1}`}>{item}</li>
               })} 
            </ul>
        </div>
    );
}