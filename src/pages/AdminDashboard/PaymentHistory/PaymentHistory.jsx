import { Watch } from "react-loader-spinner";
import usePayment from "../../../hooks/usePayment";


const PaymentHistory = () => {
    const [payment,isFetched]=usePayment()
    console.log(payment,"pay from his")
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
        <div>
             <h2 className="text-2xl font-Sora font-bold text-center text-blue-800 my-7">--Payment History--</h2>
             <div>
     
      <div className="overflow-x-auto bg-slate-200">
        <table className="table table-xs overflow-x-hidden">
          <thead >
            <tr className="border-b-black">
              <th></th>
              <th>User</th>
              
              <th>Payment Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((res, idx) => (
              <tr className="font-Sora text-zinc-900 border-b-black h-[50px]" key={idx}>
                <th>{idx + 1}</th>
                <td>{res.email}</td>
                <td>{res.paymentTime}</td>
                <td>{res.price}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
           

            
        </div>
    );
};

export default PaymentHistory;