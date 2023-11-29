import { Link } from "react-router-dom";
import './Survey.css'

const Survey = ({item}) => {
    // console.log(item,"...")
    const {category,description,title,votedNumber,_id,liked,disliked}=item
    return (
<div>
    <div className="p-4 h-[350px] bg-indigo-950 flex flex-col rounded-lg shadow-md shadow-slate-600">
        <div className="h-[70px] bg-slate-50 rounded-lg border-l-8 border-blue-300">
            <h2 className="text-2xl font-Sora font-bold text-center text-blue-900 mt-3">{title}</h2>
        </div>
        <div className="flex-grow">
            <p className="text-xl font-Sora font-semibold mt-10 text-white">Category: {category}</p>
            <hr className="text-white w-[50%] h-2 mb-5"></hr>
            <p className="font-Sora text-slate-300">{description.slice(0, 150)}.....</p>
            <div className="mt-6 flex justify-between">
                <div>
                <button className="p-2 w-[90px] rounded-2xl bg-slate-200 text-[16px] font-medium font-Sora">Vote: {votedNumber}</button>
                </div>
                <div>
                <button className=" p-2 w-[90px] rounded-2xl bg-slate-200 text-[16px] font-medium font-Sora">Like: {liked}</button>
                </div>
                <div>
                <button className="p-2 w-[100px] rounded-2xl bg-slate-200 text-[16px] font-medium font-Sora">Dislike: {disliked}</button>
                </div>
            
              
                <div>
               <Link to={`details/${_id}`}> <button className="button p-2 w-[90px] rounded-2xl bg-slate-200 text-[16px] font-medium font-Sora outline-white">Details</button></Link>

                </div>

            </div>
           
           
                
        </div>
    </div>
</div>

    );
};

export default Survey;