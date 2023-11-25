import useSurvey from "../../hooks/useSurvey";
import EachSurvey from "../EachSurvey/EachSurvey";


const SurveySection = () => {
    const [survey,loading]=useSurvey()
    console.log(survey)
    return (
     
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto gap-4">
            {
                survey.map((item,idx)=><EachSurvey key={idx} item={item}></EachSurvey>)
            }
            
            </div>
      
    );
};

export default SurveySection;