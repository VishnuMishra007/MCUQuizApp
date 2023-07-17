import { QuizQuestionsData } from "../constants/QuizQuestionsData";
import store from "../store/ReactStore";

export const getIsCorrect = (selected: number, queNo: number): boolean => {
    if(QuizQuestionsData.Answers[queNo-1]===selected){
        return true;
    }
    return false;
}

export const getCorrectOption = (queNo: number): number => {
    return QuizQuestionsData.Answers[queNo-1];
}

const getTotalCorrect = (updatedState: any) => {
    let totalCorrect = 0;
    for(let key in updatedState){
        if(updatedState[key].isCorrect===true){
            totalCorrect++;
        }
    }
    return totalCorrect;
}

 const getScoreCategory = (scorePercentage: number): string => {
    switch(scorePercentage>=0){
        case scorePercentage>0 && scorePercentage<=35:
            return 'Poor';
        case scorePercentage>35 && scorePercentage<=50:
            return 'Average';
        case scorePercentage>50 && scorePercentage<=65:
            return 'Good';
        case scorePercentage>65 && scorePercentage<=85:
            return 'Very Good';
        case scorePercentage>85:
            return 'Excellent'
        default :
        return 'No questions attemped!';
    }
 } 

export const getUserScoreCard = () => {
    const updatedState = store.getState();
    const totalCorrect: number = getTotalCorrect(updatedState);
    const totalQuestions: number = QuizQuestionsData.Questions.length;
    const ScorePercentage: number = (totalCorrect/totalQuestions)*100;
    const totalAttempted:number = Object.keys(updatedState).length;
    const scoreCategory: string = getScoreCategory(ScorePercentage);
    return {
        isPassed: ScorePercentage>=35,
        percentage: ScorePercentage,
        attempted: totalAttempted,
        correct: totalCorrect,
        total: totalQuestions,
        scoreCategory: scoreCategory
    }
}


export const getSolutionPageData = () => {
    let solutionData = [];
    const updatedState = store.getState();
    for(let i=0;i< QuizQuestionsData.Questions.length;i++){
        solutionData.push({
            question: QuizQuestionsData.Questions[i],
            selectedOption: updatedState[i+1]? updatedState[i+1].selectedOption: 0,
            correctOption:  QuizQuestionsData.Answers[i],
            options: QuizQuestionsData.Options[i]
        });
    }
    console.log(solutionData);
    return solutionData;
}