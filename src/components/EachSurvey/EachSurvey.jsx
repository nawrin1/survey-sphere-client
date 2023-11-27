

const EachSurvey = ({item}) => {
    console.log(item,"...")
    const {category,description,title,votedNumber}=item
    
    return (
<div>
    <div className="p-4 h-[300px] bg-slate-200 flex flex-col rounded-lg shadow-md shadow-slate-600">
        <div className="h-[70px] bg-slate-50 rounded-lg border-l-4 border-gray-800">
            <h2 className="text-3xl font-Sora font-bold text-center text-blue-900 ">{title}</h2>
        </div>
        <div className="flex-grow">
            <p className="text-xl font-Sora font-semibold mt-10">Category: {category}</p>
            <p className="font-Sora text-slate-600">{description.slice(0, 70)}.....</p>
            <div className="mt-6">
                <button className="btn outline-dashed text-[16px] font-medium font-Sora">Voted: {votedNumber}</button>
            </div>
        </div>
    </div>
</div>

    );
};

export default EachSurvey;