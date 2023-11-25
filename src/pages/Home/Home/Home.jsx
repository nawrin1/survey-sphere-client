import { Divider } from "@mui/material";
import Accordian from "../../../components/Accordian/Accordian";
import Banner from "../../../components/Banner/Banner";
import { blue } from "@mui/material/colors";
import Testimonials from "../../../components/Testimonials/Testimonials";
import SurveySection from "../../../components/SurveySection/SurveySection";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-xl mx-auto font-Sora font-extrabold text-5xl text-[#63088dd7] text-center mt-20 mb-20">
            <Divider>FEATURED <br />SURVEY</Divider>
            </div>
            <div className="mx-w-6xl mx-auto">
                <SurveySection></SurveySection>
            </div>
            {/* <h2 className="font-Sora font-extrabold text-5xl text-[#d0312d] text-center mt-20 mb-20 ">FAQ?</h2> */}
            <div className="max-w-xl mx-auto font-Sora font-extrabold text-5xl text-[#63088dd7] text-center mt-20 mb-20">
            <Divider>FAQ?</Divider>
            </div>
            

            <Accordian></Accordian>
            <div className="max-w-xl mx-auto font-Sora font-extrabold text-5xl text-[#63088dd7] text-center mt-20 mb-20">
            <Divider>TESTIMONIALS</Divider>
            </div>
            
            <Testimonials></Testimonials>
           
            

            
        </div>
    );
};

export default Home;