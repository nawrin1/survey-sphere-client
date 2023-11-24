import { Divider } from "@mui/material";
import Accordian from "../../../components/Accordian/Accordian";
import Banner from "../../../components/Banner/Banner";
import { blue } from "@mui/material/colors";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <h2 className="font-Sora font-extrabold text-5xl text-[#d0312d] text-center mt-20 mb-20 ">FAQ?</h2> */}
            <div className="max-w-xl mx-auto font-Sora font-extrabold text-5xl text-[#d0312d] text-center mt-20 mb-20">
            <Divider>FAQ?</Divider>
            </div>

            <Accordian></Accordian>
           
            

            
        </div>
    );
};

export default Home;