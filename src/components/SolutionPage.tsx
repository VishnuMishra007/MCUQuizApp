import { Typography } from "@mui/material";
import { SolutionCard } from "./SolutionCard";
import { getSolutionPageData } from "../utilities/QuizServices";


export const SolutionPage = () => {
    const solutionPageData = getSolutionPageData();
    return(
        <div>
            <Typography variant="h3">Here is your solution</Typography>
            <br/><hr/>
            <div className="solution-container">
                {
                    solutionPageData.map((item, index)=>{
                        return <SolutionCard solutionPageData={solutionPageData} index={index}/>
                    })
                }
               
            </div>
        </div>
    );
}