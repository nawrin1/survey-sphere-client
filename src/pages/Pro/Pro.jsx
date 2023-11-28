import { Link } from "react-router-dom";


const Pro = () => {
    return (
        <div className="text-center max-w-6xl mx-auto min-h-screen">
            <h2 className="text-2xl font-semibold font-Sora text-violet-800 mt-10">Want To Become a Pro User?</h2>
            <p className="text-2xl font-semibold font-Sora text-slate-500 mb-8 mt-6">Buy the following package and be one</p>
          <div className="flex justify-center">
          <div className="bg-emerald-200 rounded-lg p-4 h-[400px] w-[300px] mb-10">
                <h2 className="text-2xl font-semibold font-Sora">Premuim Package</h2>
                <p className="text-xl my-8">Only at</p>
                <h2 className="text-5xl font-bold text-slate-800">$40</h2>
                <p className="text-red-700 my-6">*Earn the benefit of comment on Surveys!</p>
                <Link to='/payment'><button className="w-full p-4 text-white font-Sora text-2xl bg-black rounded-3xl">Buy Now</button></Link>

            </div>
          </div>

            
        </div>
    );
};

export default Pro;