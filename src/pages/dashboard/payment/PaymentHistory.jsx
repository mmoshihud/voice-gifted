import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const response = await axiosSecure(`/payments?email=${user?.email}`);
      console.log(response);
      return response.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Payment History</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Transaction ID</th>
              <th>Total Price</th>
              <th>Total Quantity</th>
              <th>Classes Purchased</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.transactionId}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  {item.classNames
                    .map((classInfo, index) => `${index + 1}. ${classInfo}`)
                    .join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
          {/* payment.classNames.map((className) => <div></div>) */}
        </table>
      </div>
    </>
  );
};

export default PaymentHistory;
