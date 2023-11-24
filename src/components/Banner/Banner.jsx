
import { Button } from '@mui/material';
import img1 from '../../assets/4428.jpg'
import './Banner.css'
import { IoIosArrowDropright } from "react-icons/io";
const Banner = () => {
    return (
        <div className=' flex lg:flex-row justify-around h-[600px] md:h-[400px] lg:h-[600px] '>
          <div className='w-[60%] h-full items-center text-center  '>
  <div className='h-full mt-20 lg:mt-40 md:mt-40 '>
    <p className='font-Sora font-bold text-3xl lg:text-3xl text-blue-900'>Voice Your Views, Shape Your World: Survey & Poll Central!</p>
    <p className='font-Sora font-semibold text-2xl text-[#7ba0bc] mt-10'>Opinions Matter, Unleash Your Voice <br />with <br /><span className='font-Sora font-bold text-3xl text-blue-900'>Survey Sphere</span></p>

    <Button variant="contained" style={{ backgroundColor: '#d0312d', marginTop: 40 }} endIcon={<IoIosArrowDropright />}>
      EXPLORE
    </Button>
  </div>
</div>
   

            <div className='ban w-[40%]  bg-slate-500 hidden lg:block '>
            {/* <img src={img1} className=' h-[600px]' alt="" /> */}
            </div>

        </div>
    );
};

export default Banner;