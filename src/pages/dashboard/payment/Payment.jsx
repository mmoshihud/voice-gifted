import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../components/section-title/SectionTitle";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet-async";
const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);

const Payment = () => {
  const [carts] = useCart();
  const total = carts.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <>
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <SectionTitle heading="Payment"></SectionTitle>
      <h1>{price}</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm carts={carts} price={price}></CheckoutForm>
      </Elements>
    </>
  );
};

export default Payment;
