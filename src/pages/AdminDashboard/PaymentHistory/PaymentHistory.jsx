import usePayment from "../../../hooks/usePayment";


const PaymentHistory = () => {
    const [payment]=usePayment()
    console.log(payment,"pay from his")
    return (
        <div>
             <h2 className="text-2xl font-Sora font-bold text-center text-blue-800">Payment History</h2>
             <div>
     
      <div className="overflow-x-auto bg-slate-200">
        <table className="table ">
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
              <tr className="font-Sora text-zinc-900 border-b-black" key={idx}>
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