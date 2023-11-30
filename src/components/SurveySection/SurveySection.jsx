import { Watch } from "react-loader-spinner";
import useSurvey from "../../hooks/useSurvey";
import EachSurvey from "../EachSurvey/EachSurvey";


const SurveySection = () => {
    const [survey,loading,isFetched]=useSurvey()
    console.log(survey,"survey from survey sectin")
    console.log(survey)
    if(!isFetched){
        return <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center '><Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
    }
    return (
     
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto gap-4">
            {
                survey.map((item,idx)=><EachSurvey key={idx} item={item}></EachSurvey>)
            }
            
            </div>
      
    );
};

export default SurveySection;